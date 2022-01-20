import PropTypes from 'prop-types';
import Filter from '../Filter/Filter';
import s from './Searchbar.module.css';
import Logo from '../../images/logo.png';


export default function Searchbar ({value, onChange}){
    return(
        <header className={s.Header}>
            <div className={s.Header__title}>
            <img className={s.Logo} src={Logo} alt="Логотип"/>
            <h1 className={s.Title}>STATISTIC</h1>
            </div>

            <Filter filter={value} onChange={onChange}/>

        </header>
    )
}

Searchbar.propTypes={
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}
