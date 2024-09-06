import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import LoginBtn from "./components/LoginBtn"
import LogoutBtn from './components/LogoutBtn';

function App() {
   const {isAuthenticated,user}=useAuth0()
  return (
    <div className="App" style={{height:"100vh",weight:"100%",backgroundColor:"grey"}} >
     {!isAuthenticated&&(
      <>
      <LoginBtn/>
      <h2>oops log in to see your details</h2>
      </>
     )} 
     {isAuthenticated&&(
       <>
       <img style={{borderRadius:"100%"}} src={user.picture} />
       <h1>{user.name}</h1>
       <h1>{user.email}</h1>
      <LogoutBtn/>
      </>
      )} 
    </div>
  );
}

export default App;
