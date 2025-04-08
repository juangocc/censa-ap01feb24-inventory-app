import styles from './index.module.css'
import {useState} from 'react'
export default function FormInput({
    label='', 
    type='text',
    pwdButtonTitle = 'Click para Mostrar/Ocultar contraseña',
    pwdIsVisibleContent='Ocultar',
    pwdIsNotVisibleContent='Mostrar', 
    ...props 
}){
    const [isVisible, setIsVisible] = useState(false)
    const handleClick = () => {
        setIsVisible(oldValue => !oldValue)
    }
    return (
        <label className={styles['form-input']}>
            {label !== '' && <span className={styles['label']}>{label}</span>}
            <span className={styles['input-group']}>
            <input type={isVisible ? 'text' : type} {...props}></input>
            {type === 'password' &&
            <button type='button' 
            title={pwdButtonTitle}
            onClick={handleClick}>
            {isVisible ? pwdIsVisibleContent : pwdIsNotVisibleContent}
            </button>
             }
            </span>
        </label>
    )
}
