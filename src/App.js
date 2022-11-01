
import './App.scss';
import Header from './components/Header';
import TableUsers from './components/TableUsers';
import Container from 'react-bootstrap/Container';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import {Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import {useContext, useEffect} from "react";
import {UserContext} from './context/UserContext';
import AppRoutes from './routes/AppRoutes';
function App() {
  const { user, loginContext } = useContext(UserContext);
  console.log(">>> user: ", user);
  useEffect(() => {
    if(localStorage.getItem("token")) {
      loginContext(localStorage.getItem("email"), localStorage.getItem("token"))
    }
  }, [])
  return (
    <>
    <div className='app-container'>
      <Header/>
      <Container>
      <AppRoutes/>
        
      </Container>
      
    </div>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
/>
    </>
  );
}

export default App;
