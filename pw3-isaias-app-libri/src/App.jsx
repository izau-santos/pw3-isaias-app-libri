/* Importa o CSS */
import './App.css'
/* Importa o componente de card de livro */
import CardBooks from './components/CardBooks'
/* Importa o arquivo de imagem de capa do livro */
import CapaLivro from './assets/livros/cavernas_aco.jpg'

function App() {

  return (
    <>
      <CardBooks
        titulo = 'As Cavernas de aço'
        autor = 'Isaac Asimov'
        foto={CapaLivro}
        />

       <CardBooks
        titulo = 'As maravilhas do mundo moderno'
        autor = 'Pitagoras de gregorio'
      
      />
       <CardBooks
        titulo = 'As maravilhas do mundo antigo'
        autor = 'Cleopatra de moisés'
      
      />
    </>
  )
}

export default App
