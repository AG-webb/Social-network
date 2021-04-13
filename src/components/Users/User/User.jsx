import React from 'react';
import style from './User.module.css';
import { NavLink } from 'react-router-dom';

const User = (props) => {
    return (
        <div className={style.item}>
            <div className={style.block}>
                <div className="avatar">
                    <NavLink to={"/profile/" + props.id}>
                        <img src={props.photos.small != null ? props.photos.small: "https://pixelmator-pro.s3.amazonaws.com/community/avatar_empty@2x.png" } alt="user-img"/>
                    </NavLink>
                </div>
                <div className={style.info}>
                    <div className={style.name}>
                        {props.name}
                    </div>
                    <div className={style.country}>
                        <span>{"Armenia"}</span>
                        <span>{"Yerevan"}</span>
                    </div>
                    <div className={style.text}>
                        {props.status != null ? props.status: "No status yet!"}
                    </div>
                </div>
            </div>
            {
                props.followed 
                ? <button disabled={props.subscribeProgress.some(id => id === props.id)} className={`${style.btn} btn`} onClick={ () => {
                    props.deleteSubscribe(props.id);
                } } >Unfollow</button>
                : <button disabled={props.subscribeProgress.some(id => id === props.id)} className={`${style.btn} btn`} onClick={ () => {
                    props.postSubscribe(props.id);
                } } >Follow</button>
            }
        </div>
    );
}

export default User;