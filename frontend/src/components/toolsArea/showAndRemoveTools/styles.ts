import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin: 2rem auto;
    
    
  ul{
    /* height: calc(100vh  - 19rem); */
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 1.5rem;
    gap: 1rem;

    li{
      width: 100%;
      border: 1px solid black;
      border-radius: 0.5rem;
      padding: 1rem;
      background-color: var(--Ink);
      margin-top: 1rem;
      border: 1px solid var(--Green);
      

      .head{
        margin: 0 0 .5rem;
        display: flex;
        justify-content: space-between;
        
        a{
          color: var(--Ink);
          font: 600 1.5rem 'Source Sans Pro', sans-serif;	  
          text-decoration: none;
          cursor: pointer;
          position: relative;
          top: -2rem;
          background-color: var(--Green);
          border-radius: 0.5rem;
          padding: .2rem .5rem 0;

        }

        button{
          padding: 0 1.5rem;
          height: 2.5rem;
          background: var(--Red);
          color: var(--white);
          border-radius: 0.25rem;
          border: 0;
          font-size: 1rem;
          font-weight:600;
          transition: 0.2s;
          cursor: pointer;
          
          :hover{
            background: var(--DarkRed);
          }
          &:focus{
            outline: none;
            background: var(--DarkerRed);
          }

        }
      }

      p{
        font: 400 1.2rem 'Source Sans Pro', sans-serif;	
        color: var(--white);
        margin: 0;
      }

      .tags{
        width: 100%;
        margin: 1rem 0 .5rem;
        span{
          display: inline-block;
          width: auto;
          padding: 0.1rem 0.5rem;
          margin-right: 0.5rem;
          margin-top: 0.5rem;

          font: 400 1rem 'Source Sans Pro', sans-serif;
          color: var(--white);
          border: 1px solid var(--Green);
          border-radius: 0.5rem;
          transition: filter 0.2s;
          :hover{
            filter: brightness(0.9);
            /* cursor: pointer; */
          }
        }
      }
    }
  }

  @media (min-width: 1080px){
      width: 68rem;
    }
  /* @media (max-width: 615px){
      background-color: red;
      .tags{
        width: 37rem;
        background-color: blue;
      }
    } */
`