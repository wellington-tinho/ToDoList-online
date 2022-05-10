import { VscChromeClose } from 'react-icons/vsc';
import Modal from 'react-modal';
import { useTools } from '../hooks/useTools';
import { Container } from './styles';


interface ConfirmRemoveModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
  tool: {
    id: number;
    title: string;
    // count: number;
    // setCount: (count: number) => void;
  }
}

function ConfirmRemoveModal(
  
  {isOpen, onRequestClose, tool}:ConfirmRemoveModalProps){
  // {isOpen, onRequestClose, tool, count, setCount}:ConfirmRemoveModalProps){
  const {removeTools} = useTools();

  // console.log(count);
  
  //   //button confirm remove with countDown
  //   if(isOpen){
  //     if(count > 0){
  //       setTimeout(()=>{
  //           setCount(count - 1)
  //         }, 1000)
  //       }
  //     // onRequestClose();

  //   }else{
  //     setCount(10)
  //   }
  

    

 


  function handleRemoveTool(){
    removeTools(tool.id);
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
    <VscChromeClose  onClick={onRequestClose} className='react-modal-close' />

      <h2>Remove Tool {tool.title}</h2>
      <p>Are you sure you want to remove this tool ?</p>
      <div className="optionnButton">
        <button onClick={onRequestClose}>No, cancel</button>
        {/* <button onClick={onRequestClose}>No, cancel ({count})</button> */}
        <button onClick={handleRemoveTool}>Yes, remove</button>
      </div>
    </Container>
  </Modal>
  )
}

export default ConfirmRemoveModal


