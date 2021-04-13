import React from 'react';
import style from './Nav.module.css';
import NavItems from './NavItems/NavItems';
import NavFriendsContainer from './NavFriends/NavFriendsContainer';

const Nav = (props) => {
    return(
        <div className={style.nav}>
            <NavItems />
            <NavFriendsContainer />
        </div>
    );
}

export default Nav;