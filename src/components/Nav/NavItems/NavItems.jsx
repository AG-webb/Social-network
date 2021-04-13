import React from 'react';
import style from './NavItems.module.css';
import { NavLink } from 'react-router-dom';

const NavItems = (props) => {
    return(
        <div>
            <div  className={style.item}>
                <NavLink to="/profile" activeClassName={style.active}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/dialogs" activeClassName={style.active}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="#">News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/cars" activeClassName={style.active}>Cars</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/find-users" activeClassName={style.active} >Find Users</NavLink>
            </div>
            <div className={`${style.item} ${style.settings}`}>
                <NavLink to="#">Settings</NavLink>
            </div>
        </div>
    );
}

export default NavItems;