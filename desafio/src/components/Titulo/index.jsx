import React from 'react'
import styled from 'styled-components'



const Title = styled.h1`

     color: white;
     margin: 20px;
     font-weight: bold;
     font-size: 40px;
     font-family: sans-serif;

     @media screen and (max-width: 400px){
         
             
         font-size: 30px;    


     }


`




export default props => {


    return (

        <div>
            <Title>{props.title}</Title>
        </div>
    )
}