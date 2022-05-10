import Modal from 'react-modal';
import { useTools } from '../hooks/useTools';
import { Container } from './styles';

interface ConfirmRemoveModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
  toolId: number;
  toolName: string;

}

function ConfirmRemoveModal(
  
  {isOpen, onRequestClose, toolId, toolName}:ConfirmRemoveModalProps){
  const {removeTools} = useTools();
  // const [countDown, setCountDown] = useState(0);

  

  //   if(countDown > 0){
  //     setTimeout(()=>{
  //       setCountDown(countDown - 1)
  //     }, 1000)
  //   }else{
  //     onRequestClose();
  //   }
  
 


  function handleRemoveTool(){
    removeTools(toolId);
    onRequestClose();
  }
return(
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName={'react-modal-overlay'}
    className={'react-modal-content'}
  >
    
    <Container>
    <h2>Remove Tool {toolName}</h2>
    <p>Are you sure you want to remove this tool ?</p>
    <div className="optionnButton">
      <button onClick={onRequestClose}>No, cancel</button>
      {/* <button onClick={onRequestClose}>No {countDown}</button> */}
      <button onClick={handleRemoveTool}>Yes, remove</button>
    </div>
    </Container>
  </Modal>
  )
}

export default ConfirmRemoveModal