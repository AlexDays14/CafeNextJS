import {createContext, useState, useEffect} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

const QuioscoContext = createContext()

const QuioscoProvider = ({children}) => {

    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto, setProducto] = useState({})
    const [modal, setModal] = useState(false)
    const [pedido, setPedido] = useState([])
    const [nombre, setNombre] = useState('')
    const [total, setTotal] = useState(0)

    const router = useRouter()

    const obtenerCategorias = async () =>{
        try {
            const url = '/api/categorias'
            const { data } = await axios(url)
            setCategorias(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        obtenerCategorias()
    }, [])

    useEffect(() =>{
        setCategoriaActual(categorias[0])
    }, [categorias])

    useEffect(() =>{
        const nuevoTotal = pedido.reduce((total, producto) => (producto.precio * producto.cantidad) + total, 0)
        setTotal(nuevoTotal)
    }, [pedido])

    const handleClickCategoria = id =>{
        if(router.pathname != '/'){
            router.push('/')
        }
        const categoria = categorias.filter( c => c.id === id)
        setCategoriaActual(categoria[0])
    }

    const handleClickProducto = producto => {
        setProducto(producto)
    }

    const handleChangeModal = () => {
        setModal(!modal)
    }

    const handleAgregarPedido = ({categoriaId, ...item}) => {
        if(pedido.some(itemPedido => itemPedido.id == item.id)){
            /* const pedidoActualizado = pedido.map(itemPedido => {
                if(itemPedido.id == item.id){
                    item.cantidad += itemPedido.cantidad
                    return item
                }else{
                    return itemPedido
                }
            }) */
            const pedidoActualizado = pedido.map(itemPedido => itemPedido.id == item.id ? item : itemPedido)
            setPedido(pedidoActualizado)
            toast.success('Cantidad Guardada')
        }else{
            setPedido([...pedido, item])
            toast.success('Agregado Al Pedido')
        }

        setModal(false)
    }

    const handleEditarCantidades = (id) =>{
        const productoResumen = pedido.find(producto => producto.id === id)
        setProducto(productoResumen)
        setModal(!modal)
    }

    const handleEliminarProducto = id =>{
        const productosFiltrados = pedido.filter(producto => producto.id !== id)
        setPedido(productosFiltrados)
    }

    const colocarOrden = async (e) =>{
        e.preventDefault()
        
        try {
            await axios.post('/api/ordenes', {pedido, nombre, total, fecha: Date.now().toString()})

            //RESETEAR APP
            setCategoriaActual(categorias[0])
            setPedido([])
            setNombre('')
            setTotal(0)

            toast.success('Pedido Realizado Correctamente')

            setTimeout(() =>{
                router.push('/');
            }, 1000)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                handleClickCategoria,
                categoriaActual,
                handleClickProducto,
                producto,
                modal,
                handleChangeModal,
                handleAgregarPedido,
                pedido,
                handleEditarCantidades,
                handleEliminarProducto,
                nombre,
                setNombre,
                colocarOrden,
                total
            }}
        >
            {children}
        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}
export default QuioscoContext