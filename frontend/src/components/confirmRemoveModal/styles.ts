import styled from 'styled-components';

export const Container = styled.form`
  height: 100%;
  
  h2 {
    color: var(--white);
    height: 30%;
    margin-bottom: 2rem;
    font: 600 2rem 'Source Sans Pro', sans-serif;
  }
  p{
    justify-content: center;
    color: var(--DarkerWhite);
    font: 400 1.5rem 'Source Sans Pro', sans-serif;
  }
  .optionnButton{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;
    gap: 0.5rem;

    button{
      height: 4rem;
      border: 0;
      border-radius: 0.25rem;
      padding: 0.5rem;
      font: 600 1.5rem 'Source Sans Pro', sans-serif;
      cursor: pointer;

      transition: all 0.2s;
      :first-child{
        background-color: var(--DarkerWhite);
        &:hover{
          background-color: var(--MosterDarkestWhite);

        }
      }
      :last-child{
        color: var(--white);
        background-color: var(--Red);
        &:hover{
          background-color: var(--DarkRed);

        }
      }
    }
  }

`;
