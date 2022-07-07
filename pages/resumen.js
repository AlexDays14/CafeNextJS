import Layout from "../layout/Layout"
import useQuiosco from "../hooks/useQuiosco"
import ResumenProducto from "../components/ResumenProducto"

export default function Resumen() {

    const { pedido } = useQuiosco()

    return (
        <Layout pagina={`Resumen Pedido`}>
            <h1 className="text-4xl font-black">Resumen</h1>
            <p className="text-2xl my-10">
                Visualiza el Contenido de tu Pedido.
            </p>

            {pedido.length === 0 ? 
            <p className="text-center text-xl font-black uppercase">No Hay Platillos en tu Pedido</p> : 
            pedido.map(producto => (
                <ResumenProducto
                    key={producto.id}
                    producto={producto}
                />
            ))
            }
        </Layout>
    )
}