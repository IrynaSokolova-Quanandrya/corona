import { useState } from 'react';
import Filter from '../Filter/Filter';
import s from './Searchbar.module.css';


export default function Searchbar ({value, onChange}){
    console.log(value);
    
    return(
        <div>
            <img className={s.Logo} src="" alt="Логотип"/>
            <h1 className={s.Title}>STATISTIC</h1>
            <Filter filter={value} onChange={onChange}/>

        </div>
    )
}


