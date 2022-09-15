import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Login from './components/Login'
import Input from './components/Input'






function App() {


  const [user, setUser] = useState('')
  const onSubmit = (value) => {
    setUser(value)
  }
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Login onSubmit={onSubmit}/>}/>
        <Route path='/chat' element={<Input username={user} />} />
      </Routes>

    </BrowserRouter>
    </>
  );
}


export default App;

