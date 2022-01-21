import { useEffect, useState } from 'react';
import {ThreeDots} from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import FetchApi from './apiService';
import { ToastContainer } from "react-toastify";
import Searchbar from './components/Searchbar';
import Modal from './components/Modal';
import Container from './components/Container/Container';
import './App.css';
import CountryTable from "./components/CountryTable/CountryTable";

function App() {
  const [countries, setCountries] = useState([]);
  const [status, setStatus] = useState("idle");
  const [filter, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState('');
  
  useEffect(()=>{
    
        setStatus("pending")
    
       FetchApi.FetchAllStatistics()
        .then(data=>{
          setCountries(data.Countries)
          setStatus("resolved")
        })
        .catch((error) => alert('Error'))
        .finally(()=>setStatus("resolved"))

  },[])

  const getModalData = (country, confirmed, deaths, recovered) => {
    setModalData({ 
      country,
      confirmed, 
      deaths, 
      recovered 
    });
    toggleModal()
  };
  
  const toggleModal = () => {
    setShowModal(prev => !prev)
  };

 

  const changeFilter = (e) => {
    setFilter(e)
  }

  const getFilterSearch = () => {
    const normalizedFilter = filter.toLowerCase();
    return countries.filter((country) =>
      country.Country.toLowerCase().includes(normalizedFilter)
    );
  };


  return (
   <Container>
      <Searchbar 
          value={filter} 
          onChange={changeFilter}
          
      />
      <ToastContainer autoClose={3000} />
      {status === "resolved" &&
      <CountryTable 
          countries={getFilterSearch()}
          onGetData={getModalData}
          onClick={toggleModal}
      />
      }
       {status === "pending" && (
         <ThreeDots 
         color="#00BFFF" 
         height={150} 
         width={150} 
         style={{margin: "0, 50%"}}/>
       )}
   
   
   {showModal && 
   <Modal onClose={toggleModal} onGetData={modalData}/>
   }
     </Container>
  );
}

export default App;
