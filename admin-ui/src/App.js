import logo from './logo.svg';
import './App.css';
import controller  from './controller/controller';


// import Login from "./registration/login";

function App() {
  return (
    
   <div className="App" style={{
    background: 'linear-gradient(#E2F4F9,transparent)',
     background:'#93E3F9' 
   }}>
       
   
       {controller()}

    </div>
  );
}

export default App;
