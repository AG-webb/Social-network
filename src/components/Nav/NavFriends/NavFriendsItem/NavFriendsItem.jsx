import React from 'react';
import style from './NavFriendsItem.module.css';

const NavFriendsItem = (props) => {
    return(
        <div>
            <div className={style.item}>
                <div className="avatar">
                    <img src={props.src} alt="avatar"/>
                </div>
                <span>{props.name}</span>
            </div>
        </div>
    );
}

export default NavFriendsItem;