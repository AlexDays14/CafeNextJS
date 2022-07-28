import {useEffect, useCallback} from 'react'
import Layout from "../layout/Layout"
import useQuiosco from "../hooks/useQuiosco"
import { formatearDinero } from '../helpers'
/* import { loadStripe } from '@stripe/stripe-js'; */
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from '../components/CheckoutForm';

export default function Total() {

    const { pedido, nombre, setNombre, email, setEmail, colocarOrden, total, stripePromise, clientSecret, setClientSecret, options, completarOrden } = useQuiosco()

    const comprobarPedido = useCallback(() =>{
        return pedido.length === 0 || !nombre || nombre.length <= 3
    }, [pedido, nombre])

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
        if (query.get('success')) {
          console.log('Order placed! You will receive an email confirmation.');
        }
    
        if (query.get('canceled')) {
          console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
        }
      }, []);

    useEffect(() =>{
        comprobarPedido()
    }, [pedido, comprobarPedido])

/*     useEffect(() =>{
        if(!comprobarPedido()){
            colocarOrden()
        }else{
            setClientSecret('')
        }
    }, [comprobarPedido, colocarOrden, setClientSecret]) */

    return (
        <Layout pagina={`Total y Confirmar Pedido`}>
            <h1 className="text-4xl font-black">Total y Confirmar Pedido</h1>
            <p className="text-2xl my-10">
                Confirma tu Pedido a Continuación.
            </p>
            
            <div className="md:flex md:gap-5">
                <form 
                onSubmit={colocarOrden}
                className="px-5 md:w-1/2"
                >
                    <div className="mb-5">
                        <label htmlFor="email" className="block uppercase text-slate-800 font-bold text-xl">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="bg-gray-200 w-full mt-3 p-2 rounded-md"
                            placeholder="Su Correo"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="nombre" className="block uppercase text-slate-800 font-bold text-xl">Nombre</label>
                        <input
                            id="nombre"
                            name="nombre"
                            type="text"
                            className="bg-gray-200 w-full mt-3 p-2 rounded-md"
                            placeholder="Su Nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>

                    {total > 0 &&
                    <div className="mt-10">
                        <p className="text-2xl">
                            Total a pagar: <span className="font-bold text-amber-600">{formatearDinero(total)}</span>
                        </p>
                    </div>
                    }
                    <div className="mt-5 mercabtn">
                        <input
                            type='submit'
                            className={`transition-colors w-full lg:w-auto px-8 py-2 rounded uppercase font-bold text-white ${comprobarPedido() || clientSecret ? "bg-fuchsia-100 cursor-not-allowed" : "bg-fuchsia-500 hover:bg-fuchsia-700 cursor-pointer"}`}
                            value="Checkout"
                            disabled={comprobarPedido() || clientSecret}
                        />
                    </div>
                </form>
                {clientSecret && (
                    <Elements options={options} stripe={stripePromise}>
                        <CheckoutForm comprobarPedido={comprobarPedido} completarOrden={completarOrden}/>
                    </Elements>
                )}
            </div>
        </Layout>
    )
}