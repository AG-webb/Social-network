import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={style.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/BMW_logo_%28white_%2B_grey_background_circle%29.svg/1200px-BMW_logo_%28white_%2B_grey_background_circle%29.svg.png" alt="logo"/>
            <span className={style.title}>Bmw</span>
            <div className={style.account}>
                {
                    props.isAuth
                    ? <UserInfo login={props.login}  logout={props.logout} email={props.email}/>
                    : <NavLink className={style.loginBtn} to="/login">Log In</NavLink>
                }
            </div>
        </header>
    );
}

const UserInfo = (props) => {
    return (
        <div>
            <div className={style.info}>
                <span>Hello {props.login} !</span>
                <span onClick={props.logout} className={style.logout}>Logout</span>
            </div>  
            <div>
                <span>Email: </span>
                <span>{props.email}</span>
            </div>  
        </div>
    );
}

export default Header;