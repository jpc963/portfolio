export const ItemEvolucao = ({
    imgUrl,
    link,
    titulo,
    data,
    tecs,
    descricao,
}) => {
    return (
        <div className="flex flex-col lg:flex-row border-b last:border-b-0">
            <img
                src={imgUrl}
                alt="Placeholder"
                className="w-full lg:w-80 h-60 rounded-md mr-5 object-cover mb-5"
            />

            <div className="space-y-7 lg:space-y-14 w-full mb-5">
                <div className="space-y-4">
                    <a
                        href={link}
                        target="_blank"
                        className="text-slate-800 text-3xl font-bold"
                    >
                        {titulo}
                    </a>

                    <div className="flex gap-6">
                        <span className="bg-blue-950 rounded-xl text-white px-2 h-6">
                            {data}
                        </span>

                        <p className="text-slate-400 text-xl">{tecs}</p>
                    </div>
                </div>

                <p className="text-slate-800">{descricao}</p>
            </div>
        </div>
    )
}
