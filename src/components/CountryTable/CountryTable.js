import s from './CountryTable.module.css';
import CountryRow from '../CountryRow';


export default function CountryTable({countries, onClick, onGetData}){
console.log(countries);
console.log(onClick);
console.log(onGetData);
    return (
        <>
    <table className={s.Table}>
        <thead>
            <tr >
                <th>№</th>
                <th>Country</th>
                <th>Total Confirmed</th>
            </tr>
        </thead>
        <tbody>
                {countries.map((country, index)=>(
                    <CountryRow
                    onGetData={onGetData}
                    onOpen={onClick}
                    key={country.ID}
                    number={index+1}
                    country={country.Country}
                    totalConfirmed={country.TotalConfirmed}
                    confirmed={country.TotalConfirmed} 
                    deaths={country.TotalDeaths} 
                    recovered={country.TotalRecovered}
                    />
                    ))}            
        </tbody>
    </table>
          </>
    )
}

