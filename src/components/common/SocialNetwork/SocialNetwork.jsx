import React from 'react';
import style from './SocialNetwork.module.css';
import facebook from '../../../assets/img/facebook.svg';
import instagram from '../../../assets/img/instagram.svg';
import vk from '../../../assets/img/vk.svg';
import github from '../../../assets/img/github.svg';
import youtube from '../../../assets/img/youtube.svg';
import mainlink from '../../../assets/img/mainlink.svg';
import twitter from '../../../assets/img/twitter.svg';
import website from '../../../assets/img/website.svg';
import { connect } from 'react-redux';

let icons = [facebook,mainlink,vk,twitter,instagram,youtube,github,website,].sort();

const SocialNetwork = (props) => {
    return (
        <div className={style.socialIcons}>
            {
                Object.keys(props.contacts).sort().map((key, index) => {
                    return <a key={key} href={props.contacts[key] || "#"}><img src={icons[index]} alt={key} title={key}/></a>
                })
            }
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        contacts: state.profilePage.profile.contacts,
    }
}

export default connect(mapStateToProps)(SocialNetwork);