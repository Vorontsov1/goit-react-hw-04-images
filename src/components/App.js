import  {Component}  from "react";
import Modal from "./Modal/Modal";




 export class App extends Component {
    state = {
      showModal: false
    };

    toggleModal = () => {
      this.setState(({showModal}) => ({
        showModal: !showModal,
      }));
    };



  render () {
    console.log('App render');

    return(
   <Modal>
    <button type="button"></button>
   </Modal>
    )
  }
 }

 
  
   


 export default App;