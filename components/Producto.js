import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";
import { formatearDinero } from "../helpers";

const Producto = ({producto}) => {

    const { handleClickProducto, handleChangeModal } = useQuiosco()
    const { id, nombre, precio, imagen} = producto;

    return (
        <div className="border p-3 rounded-md shadow-md">
            <Image
                layout="responsive"
                width={400}
                height={500}
                src={`/assets/img/${imagen}.jpg`}
                alt={`Imagen Producto ${nombre}`}
            />
            <div className="p-5 grid grid-rows-3">
                <h3 className="text-2xl font-bold">{nombre}</h3>
                <p className="mt-5 font-black text-4xl text-amber-500">{formatearDinero(precio)}</p>

                <button
                    type="button"
                    className="w-full bg-fuchsia-500 hover:bg-fuchsia-700 mt-5 p-3 rounded-lg text-white uppercase font-bold transition-all"
                    onClick={() => {
                        handleChangeModal()
                        handleClickProducto(producto)
                    }}
                >
                    Agregar
                </button>
            </div>
        </div>
    )
}

export default Producto