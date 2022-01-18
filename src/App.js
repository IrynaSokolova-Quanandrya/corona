import { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer } from "react-toastify";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Searchbar from './components/Searchbar';
import CountryList from './components/CountryList';
import Modal from './components/Modal';
import './App.css';


const MY_KEY = 'PMAK-61e5cf2d12a2c33c817f13b7-29974da44c163c85c45abda8679a5d9d20'
axios.defaults.baseURL = 'https://api.covid19api.com/';
const oneCountry = 'live/country/south-africa/status/confirmed'

function App() {
  const [countries, setCountries] = useState([])
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState("idle");

console.log(countries);

  useEffect(()=>{
    if (!query) {
      return;
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });

    setStatus("pending")


    axios.get("summary")
    .then(response=>response.data)
    // .then(data=> {
    //   setCountries(data.countries)
    //   setStatus("resolved")
    // })
    .catch((error) => alert('Error'))
    .finally(()=>setStatus("resolved"))
  })

  const searchQuery = (query) => {
    setQuery(query);
  }
  return (
   <>
   <Searchbar onSubmit={searchQuery}/>
   <ToastContainer autoClose={3000} />
   {status === "resolved" && (
     <CountryList countries={countries}/>
   )}
   {status === "pending" && (
        <Loader
          className='Loader'
          type='Puff'
          color='#00BFFF'
          height={100}
          width={100}
          timeout={3000}
          style={{ margin: "0 50%" }}
        />
      )}
   {/* <Modal/> */}
     </>
  );
}

export default App;
