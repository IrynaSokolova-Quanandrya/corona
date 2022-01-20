import PropTypes from 'prop-types';
import s from './CountryRow.module.css'

export default function CountryRow({
    onOpen, 
    country, 
    confirmed, 
    number, 
    onGetData,  
    deaths, 
    recovered}){
    
    return(
        <tr
        onClick={()=>onGetData(country, confirmed, deaths, recovered)}
        // onOpen={onOpen}
        className={s.Row}>
            <td key={number}>{number}</td>
            <td key={country}>{country}</td>
            <td key={confirmed}>{confirmed}</td>
        </tr>
    )
}
CountryRow.propTypes={
    country: PropTypes.string.isRequired,
    totalConfirmed: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired
}