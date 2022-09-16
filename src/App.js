import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Login from './components/Login'
import Input from './components/Input'
import { AuthContextProvider } from './components/AuthContext'
import Protected from './components/Protected';


function App() {

  return (
    <>
    <AuthContextProvider>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/chat' 
        element={ <Protected><Input/></Protected>} />
      </Routes>
    </BrowserRouter>
    </AuthContextProvider>
    </>
  );
}


export default App;

