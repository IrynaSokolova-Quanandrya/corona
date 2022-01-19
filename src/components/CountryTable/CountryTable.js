import s from './CountryTable.module.css';
import CountryRow from '../CountryRow';


export default function CountryTable({countries}){
console.log(countries);
    return (
        <>
    <table>
        <thead>
            <tr >
                <th >№</th>
                <th >Country</th>
                <th >Total Confirmed</th>
            </tr>
        </thead>
        <tbody>
                {countries.map((country, index)=>(
                    <CountryRow
                    key={country.ID}
                    number={index+1}
                    country={country.Country}
                    totalConfirmed={country.TotalConfirmed}
                    />
                    ))}            
        </tbody>
    </table>
          </>
    )
}

