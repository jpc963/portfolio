import { Evolucao } from "./components/evolucao/evolucao"
import { Footer } from "./components/footer/footer"
import { Header } from "./components/header"
import { Recentes } from "./components/recentes/recentes"

export default function Home() {
    return (
        <main>
            <Header />

            <Recentes />

            <Evolucao />

            <Footer />
        </main>
    )
}
