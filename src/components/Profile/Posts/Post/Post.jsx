import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.item}>
            <div className="avatar">
                <img src={props.src} alt="avatar"/>
            </div>
            <span className={style.description}> {props.message} </span>
            <a href="#" className={style.likes}>likes {props.likes}</a>
        </div>
    );  
}

export default Post;