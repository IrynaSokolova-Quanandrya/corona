import PropTypes from 'prop-types';
import s from './CountryRow.module.css'

export default function CountryRow({
    country, 
    confirmed, 
    number, 
    onGetData,  
    deaths, 
    recovered}){
    const getModalData = () => {
        onGetData(country, confirmed, deaths, recovered)
    }
    return(
        <tr
        onClick={getModalData}
        className={s.Row}>
            <td key={number}>{number}</td>
            <td key={country}>{country}</td>
            <td key={confirmed}>{confirmed}</td>
        </tr>
    )
}
CountryRow.propTypes={
    country: PropTypes.string.isRequired,
    confirmed: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
    onGetData: PropTypes.func.isRequired,
    deaths: PropTypes.number.isRequired,
    recovered: PropTypes.number.isRequired
}