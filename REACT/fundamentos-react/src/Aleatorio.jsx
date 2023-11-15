  import React from "react";


const Aleatorio= (props) =>{
    /*
      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }
const  valorMin = Number(prompt('Escola um valor minimo'))
const  valorMax = Number(prompt('Escola um valor Maximo'))
      outra maneira*/

      /*Usando Destruct */
const {min, max} = props;
const NumeroAleatorio = parseInt(Math.random() * (max - min)) + min;


    return(
        <>
        <h2>Sorteador de numeros aleatorio</h2>
        <p>Valor minimo {min}</p>
        <p>Valor maximo {max}</p>
        <p>Numero sorteado <strong>{NumeroAleatorio}</strong></p>

        </>
    )
}

export default Aleatorio;
