import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Characters from './components/Characters'
import Character from './components/Character'
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3000/api/characters');
        
            if (!response.ok) {
                throw new Error('Characters could not be fetched!');
            }
            const json_response = await response.json();
            setData(json_response); // assign JSON response to the data variable.
        } catch (error) {
            console.error('Error fetching characters, end of function:', error);
        }
    };
    fetchData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Characters data={data} />} />
          <Route path="/character/:id" element={<Character />} />
        </Routes>
      </BrowserRouter>
      
      
    </>
  )
}

export default App
