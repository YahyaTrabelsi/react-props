// import logo from './logo.svg';
import "./App.css";
import Profile from "./Profile/Profile.js";
import Image from "./Image.jpg";


function App() {
  
 function showAlert(name) {
   
  return alert (name)

 }
  
  
  return (
    <div className="App">
      <Profile
        fullName="Yahya Trabelsi"
        bio="You are not responsible for the programming you picked up in childhood, However, as an adult, you are the one hundred percent responsible for fixing it"
        profession="Web development"
        showAlert={showAlert}
      >
        <div>
          <img src={Image} alt="children props" width="200px" />
        </div>
      </Profile>

    </div>
      
    
  );
}

export default App;
