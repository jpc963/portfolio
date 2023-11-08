import { ItemEvolucao } from "./item-evolucao"

export const Evolucao = () => {
    const projetos = [
        {
            imgUrl: "https://picsum.photos/320/240",
            link: "https://github.com/jpc963/expo-social-app",
            titulo: "Aplicativo de rede social",
            data: "2023",
            tecs: "React Native - Node.js",
            descricao:
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat nostrud amet.",
        },
        {
            imgUrl: "https://picsum.photos/320/240",
            link: "https://github.com/jpc963/projeto-financa-django-react",
            titulo: "Projeto de controle de finanças",
            data: "2022",
            tecs: "Django - React",
            descricao:
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit off.",
        },
    ]

    return (
        <div className="w-full p-6">
            <div className="md:mx-36 space-y-6">
                <h2 className="text-slate-800 text-lg">Minha evolução</h2>

                {projetos &&
                    projetos.map((projeto, index) => (
                        <ItemEvolucao
                            key={index}
                            {...projeto}
                        />
                    ))}
            </div>
        </div>
    )
}
