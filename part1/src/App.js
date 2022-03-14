import './App.css';
import Mensaje from './Mensaje.js'


const Description = () => {
  return <p>Esta es una descripción</p>
}

const Avatar = () => {
  return <img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&f=y" alt="Avatar"/>
}

function App() {
  return (
    <div className="App">
      <Mensaje color="red" message="Estamos trabajando"/>
      <Mensaje color="green" message="en un curso"/>
      <Mensaje color="yellow" message="de React"/>
      <Description/>
      <Avatar/>
    </div>
  );
}

export default App;
