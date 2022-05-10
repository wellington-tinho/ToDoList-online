import styled from 'styled-components';

export const Container = styled.form`
  h2 {
    color: var(--white);
    height: 30%;
    margin-bottom: 2rem;
    font: 600 2rem 'Source Sans Pro', sans-serif;
  }
    div{
      margin-top: 3rem;
      /* border: 1px solid var(--background); */
      div{
        display: flex;
        background: var(--MosterDarkestWhite);
        
        & + div{
          margin-top: 1rem;
        }
        
        p{
          width: 62%;
          padding: 0 1rem;
          height: 3rem;
          border-radius: 0.25rem;
          border: 1px solid var(--LigthInk);
          color: var(--LigthInk);
          display: flex;
          align-items: center;
        
          font: 600 1.2rem 'Source Sans Pro', sans-serif;
          :hover{
            filter: brightness(0.9);
          }

        }
        .description{
          height: 4rem;
        }
       input{
         width: 100%;
         padding: 0 1rem;
         height: 3rem;
         border-radius: 0.25rem;
         background: var(--white);
         border: 1px solid var(--LigthInk);
         /* font-weight: 400; */
         font-size: 1rem;
        }
        
      }
    
      button{
      font: 600 1.5rem 'Source Sans Pro', sans-serif;

        width: 100%;
        padding: 0 1.5rem;
        height: 3.5rem;
        background: var(--Green);
        color: var(--white);
        border-radius: 0.25rem;
        border: 0;
        margin-top: 1.5rem;
        transition: all 0.2s;
        :hover{
           background: var(--DarkerGreen);
          
        }
      }
    }

`;
