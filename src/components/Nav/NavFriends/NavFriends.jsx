import React from 'react';
import style from './NavFriends.module.css';
import NavFriendsItem from './NavFriendsItem/NavFriendsItem';

const NavFriends = (props) => {
    let navFriends = props.friends
        .map(friend => <NavFriendsItem name={friend.name} src={friend.src} key={friend.id}/>);

    return(
        <div className={style.wrapper}>
            <span className={style.title}>Friends</span>
            <div className={style.block}>
                {navFriends}
            </div>
        </div>
    );
}

export default NavFriends;