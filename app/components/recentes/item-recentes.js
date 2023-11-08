export const ItemRecentes = ({ link, titulo, data, tecs, descricao }) => {
    return (
        <div className="bg-white p-6 space-y-6">
            <a
                href={link}
                target="_blank"
                className="text-slate-800 font-bold text-xl"
            >
                {titulo}
            </a>

            <p className="text-slate-800 text-lg">
                {data} | {tecs}
            </p>

            <p className="text-slate-800">{descricao}</p>
        </div>
    )
}
