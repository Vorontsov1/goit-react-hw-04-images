import   {Component}  from "react";
import Modal from "./Modal/Modal";


class App extends Component  {
  state = {
    showModal: false
  }
  render() {
   return (
    <div>
      {/* <Button />
      <ImageGallery />
      <Loader /> */}
      <Modal>
       <button type="button">this fucking modal window</button>
      </Modal>
      {/* <SearchBar /> */}
    </div>
   )
  }
}

export default App;


 