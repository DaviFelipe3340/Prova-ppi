import CardGrid from "./components/CardGrid";
import Header from "./components/Header";
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header>Foco, Força e fé </Header>
      <main>
        <CardGrid />
      </main>
      <Footer
        text={`IFRN - Campus Macau
Curso Técnico em Informática
Programação para Internet 2025`}
        nome="Davi Felipe de Assis Borges"
        github="https://github.com/DaviFelipe3340"
        instagram="https://www.instagram.com/davifelipe_3340/"
        whatsapp=""
      />
    </>
  )
}