import style from "./App.module.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav"
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About";
import Detail from "./Detail";
import Form from "./components/Form";
import Favorites from './components/Favorites/Favorites';



function App() {

  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = "maxianguita"
  const password = "1234"

  const login = (userData) => {

    if (userData.username === username && userData.password === password) {
      setAccess(true)
      navigate('/home');

    }
  }

  useEffect(() => {
    !access && navigate('/')


  }, [access])



  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.id) {

          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert('No hay personajes con ese ID');
        }
      })
      .catch(err => console.log(err))

  }
  const onClose = (id) => {
    setCharacters(
      characters.filter(character => character.id !== id)
    )
  }

  return (

    <div className={style.nav}>    
      <div>
        {location.pathname === "/" ? <Form login={login} /> : <Nav onSearch={onSearch} />}
        <Routes>
          <Route path='home' element={<Cards onClose={onClose} characters={characters} />} />
          <Route path='about' element={<About />} />
          <Route path='detail/:detailId' element={<Detail />} />
          <Route path='favorites' element={<Favorites />} />
        </Routes>
      </div>

    </div>
  )
}

export default App;


