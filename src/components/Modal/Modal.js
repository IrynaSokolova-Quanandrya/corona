import PropTypes from 'prop-types'
import { createPortal } from 'react-dom';
import confirmed from '../../images/confirmed.png';
import death from '../../images/death.png';
import recovered from '../../images/recovered.png';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({onClose, onGetData}){

    return createPortal (
        <div className={s.overlay}>
            <div 
            className={s.modal} 
            >
        <h2 className={s.modal__title}>{onGetData.country}</h2>
        <ul className={s.modal__list}>
            <li className={s.modal__item}>                
                <p>
                    <img src={confirmed} alt='Icon'/>
                    Total Confirmed
                    </p>
                <p>{onGetData.confirmed}</p>
            </li>
            <li className={s.modal__item}>                
                <p>
                    <img src={death} alt='Icon'/>
                    Total Deaths
                    </p>
                <p>{onGetData.deaths}</p>
            </li>
            <li className={s.modal__item}>                
                <p>
                    <img src={recovered} alt='Icon'/>
                    Total Recovered
                    </p>
                <p>{onGetData.recovered}</p>
            </li>
        </ul>
        <button
        onClick={onClose}
        type="button"
        className={s.btn}>
            OK
            </button>
        </div>
        </div>,
        modalRoot,
    )
}

Modal.propTypes={
    onClose: PropTypes.func.isRequired,
    onGetData: PropTypes.object.isRequired
}