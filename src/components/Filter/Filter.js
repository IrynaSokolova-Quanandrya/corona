import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import s from './Filter.module.css'

export default function Filter({filter, onChange}){
    console.log(filter);
//     const [query, setQuery] = useState('');
// console.log(query);

    const handleChange = (e) => {
        onChange(e.target.value.toLowerCase())
    }

    // const handleSubmit = (e) => {
    //     e.preventdefault();
    //     if(filter.trim()===''){
    //         return toast.error('Enter country')
    //     }
    //     onChange(filter);

    // }
    return(
        <label className={s.Label}>
            <input 
                onChange={handleChange}
                className={s.Input}
                value={filter}
                name="query"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search..."
            />
        </label>
    )
}

// Filter.prototype = {
//     onSubmit: PropTypes.func.isRequired
// }