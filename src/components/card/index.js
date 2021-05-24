import { useState } from 'react';
import Button from '../Button';

const Card = () => {
    const [Value, setValue] = useState(0) // valor inicial que será usado no state

    function Add () {         //A function add chama a função setValue lá do meu state...A function setValue receber como parâmetro o valor inicial que è 0 e depois adiciona  +1  e o resultado passa a ser o seu valor inicial.
        setValue(Value + 1)
    }
    function Remove () {     // A function Remove  faz o contrário ela pega o valor inicial  e reduz 1
        setValue(Value - 1)
    }


    return(
        <div className="card">
            <div className="card-header">
                My First Card
            </div>
            <div className="card-body">
                <button
                    className="btn btn-success"
                    onClick={Add}
                >
                    Add
                </button>
            
                <button
                    className="btn btn-danger"
                    onClick={Remove}
                >
                    Remove
                </button>
                <p>{Value}</p>
            </div>
        </div>
    
    )
}
export default Card;