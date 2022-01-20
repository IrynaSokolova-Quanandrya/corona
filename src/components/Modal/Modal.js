import PropTypes from 'prop-types'
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import FetchApi from '../../apiService'
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({onClose, onGetData}){
//     const [country, setCountry] = useState([])

// console.log(country);
//     useEffect(()=>{
//         FetchApi.FetchOneCountryStatictics('Ukraine')
//         .then(setCountry)
//     },[])

    useEffect(()=>{
        // window.addEventListener('click', onCloseByClick);
        window.addEventListener('keydown', onCloseByKeydown);
        return (
            window.removeEventListener('keydown', onCloseByKeydown)
        )
    },[])

    // const onCloseByClick = (e) => {
    //     if(e.target.nodeName === 'DIV'){
    //         onClose()
    //     }
    // }

    const onCloseByKeydown = (e) => {
        console.log(e.code);
        if(e.code === 'Escape'){
            onClose();
        }
    }

    return createPortal (
        <div 
            className={s.Modal} 
            onClose={onClose}>
        <h2>{onGetData.country}</h2>
        <ul>
            <li>
                {/* <svg></svg> */}
                <p>Total Confirmed</p>
                <p>{onGetData.confirmed}</p>
            </li>
            <li>
                {/* <svg></svg> */}
                <p>Total Deaths</p>
                <p>{onGetData.deaths}</p>
            </li>
            <li>
                {/* <svg></svg> */}
                <p>Total Recovered</p>
                <p>{onGetData.recovered}</p>
            </li>
        </ul>
        <button type="button"></button>
        </div>,
        modalRoot,
    )
}