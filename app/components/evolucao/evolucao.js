import { ItemEvolucao } from "./item-evolucao"

export const Evolucao = () => {
    const projetos = [
        {
            imgUrl: "https://firebasestorage.googleapis.com/v0/b/portfolio-jpc.appspot.com/o/imgs%2Fifood-app.png?alt=media&token=21a93459-f281-4e3f-b69e-68062b00b2a1",
            link: "https://github.com/jpc963/ifood-app",
            titulo: "Ifood Stats",
            data: "2023",
            tecs: "React Native - Node.js",
            descricao:
                "Aplicativo para controlar os receitas/gastos feitos por entregadores do Ifood.",
        },
        {
            imgUrl: "https://firebasestorage.googleapis.com/v0/b/portfolio-jpc.appspot.com/o/imgs%2Fprojeto-financas-django-react.png?alt=media&token=53cd4ebb-284c-4bf9-b5db-ce147ebeeea5",
            link: "https://github.com/jpc963/projeto-financa-django-react",
            titulo: "Controle de finanças",
            data: "2022",
            tecs: "Django - React",
            descricao:
                "API para controle de finanças pessoais, com autenticação e autorização. Back-end feito com Django e Django Rest Framework, e front-end com React.",
        },
    ]

    return (
        <div className="w-full p-6">
            <div className="md:mx-36 space-y-6">
                <h2 className="text-slate-800 text-lg">Minha evolução</h2>

                {projetos.map((projeto) => (
                    <ItemEvolucao {...projeto} />
                ))}
            </div>
        </div>
    )
}
