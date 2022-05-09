import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 5rem;
    margin: 0 auto;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding: 0 1.5rem;
  


  div{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    /* gap: 1rem; */

    input.search{
      font: 400 1.3rem 'Source Sans Pro', sans-serif;	  
      margin-right: 1rem;
      padding: 1rem;
      border-radius: 0.5rem;
      border: 1px solid var(--DarkerWhite);
      background-color: var(--DarkerWhite);

      &:focus{
        outline: none;
        filter: brightness(0.9);
      }
    }

    input[type="checkbox"]{
      width: 1.5rem;
      height: 1.5rem;
      border: 1px solid var(--DarkerWhite);
      border-radius: 0.5rem;
      margin: 0 1rem;
      accent-color: var(--DarkGreen);
    
      
    }
    label{
      font: 600 1.2rem 'Source Sans Pro', sans-serif;	  
      margin-right: 1rem;
      color: var(--white);
    }
  }
  button{
    //Estilo do botão
    background-color: var(--DarkGreen);
    border: 1px solid var(--LighterGreen);
    font: 600 1rem 'Source Sans Pro', sans-serif;	  
    color: white;
    padding: 1rem;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    border-radius: .5rem;

    :hover{
      background-color: var(--DarkerGreen);
    }
    :active{
      filter: brightness(0.5);
    }  
  }

  @media (min-width: 1080px){
      padding: 0;
      width: 65rem;
    }
`

