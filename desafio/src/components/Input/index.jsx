import React from 'react'
import styled from 'styled-components'
import { GoSearch } from 'react-icons/go'


const Input = styled.input`


     width: 350px;
     height: 30px;
     border-radius: 3px;
     outline: none;
     border: none;
     padding: 10px;
     box-shadow: 1px 1px 9px gray;


     ::placeholder{

         font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
         font-size: 17px;
         font-weight: lighter;
     }


     @media screen and (max-width: 490px){

         width: 270px;
     }

      @media screen and (max-width: 360px){

         width: 250px;
     }

     

`

const Container = styled.div`

    position: relative;

`

const Icon = styled.div`

    position: absolute;
    top: 13px;
    right: 5px;
`




export default props => {


    return (

        <div>

            <Container>

                <Input placeholder="Insira aqui o nome da cidade" />

                <Icon>
                    <GoSearch size={25} color="grey" />

                </Icon>

            </Container>


        </div>
    )
}