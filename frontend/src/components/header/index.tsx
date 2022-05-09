import styled from 'styled-components';

const Container = styled.header`
  width: 100%;
  color: var(--white) ;
  background: var(--Ink) ;
  padding: 1rem 1rem;;
  height: 7rem;
  
  
  
  
  .header{
    padding: 0 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* justify-content: center; */
    
  
    margin: 0 auto ;

    h1,h2{
      font-family: 'Source Sans Pro', sans-serif;
      font-size: 2.4rem;
    }
    div{
      display: flex;
      align-items: baseline;
      gap: 1rem;

      h2{
        font-size: 1.4rem;
      }
      h3{
        font-family: 'PT Mono', monospace;
        font-size: .8rem;
      }
    }

    @media (min-width: 1080px){
      padding: 0;
      width: 65rem;
    }
  
  }
`

export function Header(){
  return (
    <Container>
      <div className="header">

        <h1>VUTTR</h1>
        <div>
          <h2>Very useful tools to remember</h2> 
          -
          <h3>Sozei™</h3>
        </div>
      </div>
    </Container>
  );
}


