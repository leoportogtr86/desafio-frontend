import React from 'react'
import styled from 'styled-components'



const Input = styled.input`


     width: 350px;
     height: 30px;
     border-radius: 3px;
     outline: none;
     border: none;
     padding: 10px;

     ::placeholder{

         font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
     }


     @media screen and (max-width: 400px){

         width: 300px;
     }

     

`


export default props => {


    return (

        <div>

            <Input placeholder="Insira aqui o nome da cidade">


            </Input>

        </div>
    )
}