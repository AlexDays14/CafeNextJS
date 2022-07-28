import {createContext, useState, useEffect} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const QuioscoContext = createContext()

const QuioscoProvider = ({children}) => {

    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto, setProducto] = useState({})
    const [modal, setModal] = useState(false)
    const [pedido, setPedido] = useState([])
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [total, setTotal] = useState(0)
    const [clientSecret, setClientSecret] = useState("")
    const [orden, setOrden] = useState({})
    const [paymentIntent, setPaymentIntent] = useState('')

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
        setTotal(Number(nuevoTotal.toFixed(2)))
        setOrden({...orden, total: Number(nuevoTotal.toFixed(2))})
    }, [pedido])

    const handleClickCategoria = id =>{
        if(router.pathname != '/'){
            router.push('/' + '#main')
        }else{
            router.push('/' + '#main')
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
            setOrden({...orden, pedido: pedidoActualizado})
            toast.success('Cantidad Guardada')
        }else{
            setPedido([...pedido, item])
            setOrden({...orden, pedido: [...pedido, item]})
            toast.success('Agregado Al Pedido')
        }
        setClientSecret('')
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
        setClientSecret('')
    }

    const colocarOrden = async (e) =>{

        if(e){
            e.preventDefault()
        }
        
        try {
            const {data} = await axios.post('/api/paymentIntent', {total, paymentIntent, email})
            console.log(data)
            setClientSecret(data.clientSecret)
            setPaymentIntent(data.id)
            setOrden({pedido, nombre, email, total, fecha: Date.now().toString(), completada: true, paymentIntent: data.id})

        } catch (error) {
            console.log(error)
        }
    }

    const completarOrden = async () =>{
        try {
            const respuesta = await axios.post('/api/completarOrden', {orden})
            console.log(respuesta)

            //RESETEAR APP
            setCategoriaActual(categorias[0])
            setPedido([])
            setNombre('')
            setEmail('')
            setTotal(0)
            setClientSecret('')
            setProducto({})
            setOrden({})
            setPaymentIntent('')

            toast.success('Pedido Realizado Correctamente')

            /* setTimeout(() =>{
                router.push('/');
            }, 1000) */

        } catch (error) {
            console.log(error)
        }
    }

    const appearance = {
        theme: 'stripe',
      };
      const options = {
        clientSecret,
        appearance,
      };

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
                email,
                setEmail,
                colocarOrden,
                total,
                stripePromise,
                clientSecret,
                setClientSecret,
                options,
                completarOrden
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