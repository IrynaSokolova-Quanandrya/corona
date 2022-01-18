import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './Searchbar.module.css';


export default function Searchbar ({onSubmit}){
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value.toLowerCase())
    }

    const handleSubmit = (e) => {
        e.preventdefault();
        if(query.trim()===''){
            return toast.error('Enter country')
        }
        onSubmit(query);
        setQuery('');

    }
    return(
        <div>
            <img className={s.Logo} src="" alt="Логотип"/>
            <h1 className={s.Title}>STATISTIC</h1>
            <form onSubmit={handleSubmit} className={s.SearchForm}>
                <input 
                onChange={handleChange}
                className={s.SearchForm__input}
                value={query}
                name="query"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search..."
                />
            </form>

        </div>
    )
}

Searchbar.prototype = {
    onSubmit: PropTypes.func.isRequired
}
