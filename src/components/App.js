import   {Component}  from "react";
import Modal from "./Modal/Modal";


class App extends Component  {
  state = {
    showModal: false
  }

  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal
    }))
  }


  render() {
    console.log('App render');
const {showModal} = this.state;

   return (
    <div>
      {/* <Button />
      <ImageGallery />
      <Loader /> */}
      {/* <Modal> */}
       <button type="button" onClick={this.toggleModal}>
        Open modal
        </button>

        
      {showModal &&  (
      <Modal onClose={this.toggleModal}>

        <h1>Hello this is content of modal like a children</h1>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatem iure cum ipsam, aspernatur
           expedita voluptatibus consequuntur porro laborum deserunt?
           </p>

           <button type="button" onClick={this.toggleModal}>Close modal</button>

           </Modal>
           )}
      {/* <SearchBar /> */}
    </div>
   )
  }
}

export default App;


 