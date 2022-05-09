import styled from 'styled-components';
import { SearchAndAddTools } from './searchAndAddTools';
import { ShowAndRemoveTools } from './showAndRemoveTools';

const Container = styled.div`
  /* height: calc(100vh - 7rem); */
  padding: 2rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  background:  var(--DarkerPurple);
  background: linear-gradient( 
    175deg, 
    var(--DarkerPurple) 0%, 
    var(--DarkPurple) 49%,
    var(--Ink) 100%
    );

  /* align-items: center; */
  
`;


export function ToolsArea(){
 

  return (
    <Container>
      <SearchAndAddTools />
      <ShowAndRemoveTools/> 
    </Container>

  );

} 
