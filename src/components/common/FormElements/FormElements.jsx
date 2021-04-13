import React from 'react';
import style from './FormElements.module.css';

export const TextArea = ({input, meta: {touched, error}, ...props}) => {
    let invaild = touched &&error;
    return (    
        <div className={`${style.inputGroup} ${invaild ? style.invaild : ""}`}>
            <textarea {...input} {...props}/>
            {invaild && <span className={style.errorMessage}>{error}</span>}
        </div>
    );
}

export const Input = ({input, meta: {touched, error}, ...props}) => {
    let invaild = touched && error;
    return (    
        <div className={`${style.inputGroup} ${invaild ? style.invaild : ""}`}>
            <input {...input} {...props}/>
            {invaild && <span className={style.errorMessage}>{error}</span>}
        </div>
    );
}