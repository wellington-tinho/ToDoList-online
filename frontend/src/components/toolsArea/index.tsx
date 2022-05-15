import styled from 'styled-components';
import { SearchAndAddTools } from './searchAndAddTools';
import { ShowAndRemoveTools } from './showAndRemoveTools';

const Container = styled.div`
  padding: 2rem 1rem 1rem;
  display: flex;
  flex-direction: column;
`;


export function ToolsArea(){
 

  return (
    <Container>
      <SearchAndAddTools />
      <ShowAndRemoveTools/> 
    </Container>

  );

} 
