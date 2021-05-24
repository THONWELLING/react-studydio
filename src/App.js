import Item from './components/item';
import Card from './components/card';

const App = () => {
  
  return (                      //para trabalhar com componentes irmãos vc precisa criar uma div separada para cada um dos componentes.para não precisar disso e não poluir o seu código com muitas divs vc pode utilizar o react fragment
                                //o react fragment é uma dic vazia  abre a tag e fecha  e vc pode trabalhar com componentes irmãos
    <>                           
    <h1>"My First Application With React!!"</h1>  
    <ul>
      <Item>
        Item 1
        </Item> 
      <Item>
        Item 2
        </Item> 
      <Item>
        Item 3
        </Item> 
      
        </ul> 
        <Card />
    </>
  )
}
export default App;