import { useRouter } from "next/router"
import useQuiosco from "../hooks/useQuiosco"

const pasos = [
    {paso: 1, nombre: 'Menú', url: '/'},
    {paso: 2, nombre: 'Resumen', url: '/resumen'},
    {paso: 3, nombre: 'Datos y Total', url: '/total'}
]

const Pasos = () => {

    const router = useRouter()

    const calcularProgreso = () =>{
        let valor
        switch(router.pathname){
            case '/':
                valor = 2
                return `${valor}%`
            case '/resumen':
                valor = 50
                return `${valor}%`
            case '/total':
                valor = 100
                return `${valor}%`
            default:
                valor = 2
                return `${valor}%`
        }
    }

    return (
        <>
            <div className="flex gap-5 md:justify-between mb-5">
                {pasos.map(paso => (
                    <button
                        onClick={() => {
                            router.push(paso.url + '#main')
                        }}
                        key={paso.paso}
                        className={"text-2xl font-bold transition-colors" + (router.pathname === paso.url && " text-amber-500 hover:text-amber-700")}
                    >
                        {paso.nombre}
                    </button>
                ))}
            </div>

            <div className="bg-gray-100 mb-12">
                <div 
                    className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white"
                    style={{
                        width: calcularProgreso()
                    }}
                >
                </div>
            </div>
        </>
    )
}

export default Pasos