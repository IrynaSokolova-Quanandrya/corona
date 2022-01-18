import PropTypes from 'prop-types';
import s from './CountryList.module.css';

export default function CountryList({countries}){
    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>№</th>
                    <th>Country</th>
                    <th>Total Confirmed</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>number</td>
                    <td>country</td>
                    <td>total</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}