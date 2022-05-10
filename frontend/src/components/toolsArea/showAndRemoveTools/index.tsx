import { useState } from 'react';
import ReactModal from 'react-modal';
import ConfirmRemoveModal from '../../confirmRemoveModal';
import { useTools } from '../../hooks/useTools';
import { Container } from './styles';


ReactModal.setAppElement('#root')

export function ShowAndRemoveTools(){
  const { tools:toolsList } = useTools();
  
  const [removeId, setRemoveId] = useState(0);
  const [removeToolName, setRemoveToolName] = useState('');
  
  const [isRemoveModal, setIsRemoveModal] = useState(false);

 function handleOpenConfirmRemoveModal(id:number, name:string){
  setRemoveToolName(name)
  setRemoveId(id)
  setIsRemoveModal(true)
 }
 
  function handleCloseConfirmRemoveModal(){
    setIsRemoveModal(false)
  }


  return (
    <>
      <Container>
      
      <ul>
          {toolsList?.map(tool => {
            
            return(
              
              <li key={tool.id}>

                <div className="head">
                  <a href={tool.link} className="link">{tool.title}</a>
                  <button className="remove" onClick={()=>handleOpenConfirmRemoveModal(tool.id, tool.title)}>
                    Remover
                  </button>
                </div>

                <p>{tool.description}</p>
                
                <div className="tags">
                  {tool.tags.map(tag => {
                    return(
                      <span key={tag}>#{tag}</span>
                    )
                  })}
                </div>

              </li>
            )
          })}
      </ul>


      </Container>
      <ConfirmRemoveModal
        isOpen={isRemoveModal}
        onRequestClose={handleCloseConfirmRemoveModal}
        toolId={removeId}
        toolName={removeToolName}
      />
    </>
  );
}