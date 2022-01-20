import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import s from './Filter.module.css'
import SearchIcon from '../../images/Search-icon.svg';

export default function Filter({filter, onChange}){
    
    const handleChange = (e) => {
        onChange(e.target.value.toLowerCase())
    }

    return(
        <div className={s.Container}>
            <input 
                onChange={handleChange}
                className={s.Input}
                value={filter}
                name="query"
                type="text"
                autoComplete="off"
                placeholder="Search..."
            />
        <svg className={s.Icon} width='30' height='30'>
            <use href={SearchIcon}></use>
        </svg>
        </div>
    )
}
Filter.prototype = {
    filter: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
}