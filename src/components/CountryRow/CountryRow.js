import PropTypes from 'prop-types';
import s from './CountryRow.module.css'

export default function CountryRow({ country, totalConfirmed, number}){
    return(
        <tr>
            <td key={number}>{number}</td>
            <td key={country}>{country}</td>
            <td key={totalConfirmed}>{totalConfirmed}</td>
        </tr>
    )
}
CountryRow.propTypes={
    country: PropTypes.string.isRequired,
    totalConfirmed: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired
}