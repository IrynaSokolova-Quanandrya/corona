import { useEffect, useState } from 'react';
// import Loader from "react-loader-spinner";
import FetchApi from './apiService';
import { ToastContainer } from "react-toastify";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Searchbar from './components/Searchbar';
// import Modal from './components/Modal';
import './App.css';
import CountryTable from "./components/CountryTable/CountryTable";

function App() {
  const [countries, setCountries] = useState([]);
  const [status, setStatus] = useState("idle");
  const [filter, setFilter] = useState('');

  useEffect(()=>{
      // window.scrollTo({
      //     top: document.documentElement.scrollHeight,
      //     behavior: "smooth",
      //   });
    
        setStatus("pending")
    
       FetchApi()
        .then(data=>{
          setCountries(data.Countries)
          setStatus("resolved")
        })
        .catch((error) => alert('Error'))
        .finally(()=>setStatus("resolved"))

  },[])

  const changeFilter = (e) => {
    console.log(e);
    setFilter(e)
  }

  const getFilterSearch = () => {
    const normalizedFilter = filter.toLowerCase();

    return countries.filter((country) =>
      country.Country.toLowerCase().includes(normalizedFilter)
    );
  };


  return (
   <>
      <Searchbar 
          value={filter} 
          onChange={changeFilter}
      />
      <ToastContainer autoClose={3000} />
      {status === "resolved" &&
      <CountryTable 
          countries={getFilterSearch()}
      />
      }
       {/* {status === "pending" && (
        <Loader
          className='Loader'
          type='Puff'
          color='#00BFFF'
          height={100}
          width={100}
          timeout={3000}
          style={{ margin: "0 50%" }}
        />
      )} */}
   
   
   {/* <Modal/> */}
     </>
  );
}

export default App;
