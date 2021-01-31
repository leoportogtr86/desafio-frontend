import styled from 'styled-components'



export const Row = styled.div`

     display: flex;
     flex-direction: row;
     justify-content: center;
     align-items: center;
     width: 100%;
`


export const Line = styled.div`

    width: 340px;
    height: 1px;
    background-color: white;
    text-align: center;
    margin: auto;
    margin-top: 40px;


     @media screen and (max-width: 400px){

         width: 320px;
     }


`


export const Container = styled.div`

    width: 370px;
    height: 250px;
    background-color: white;
    margin: 30px;
    border-radius: 2px;
    box-shadow: 1px 1px 9px gray;

`
