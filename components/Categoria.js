import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";

const Categoria = ({categoria}) => {

    const { categoriaActual, handleClickCategoria } = useQuiosco();
    const { nombre, icono, id } = categoria;

    return (
        <button 
            type="button"
            className={`${categoriaActual?.id === id ? "bg-amber-400" : ""} flex items-center gap-4 w-full border h-20 md:h-auto p-5 hover:bg-amber-400 transition-all hover:cursor-pointer`}
            onClick={() => handleClickCategoria(id)}
        >
            <div className="w-16 md:w-auto">
                <Image
                    width={70}
                    height={70}
                    src={`/assets/img/icono_${icono}.svg`}
                    alt={`Imagen Icono ${nombre}`}
                /> 
            </div>

            <p
                className="text-2xl font-bold hidden md:block"
            >
                {nombre}
            </p>
        </button>
    )
}

export default Categoria