import React from 'react';
import NavFriends from './NavFriends';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        friends: state.navBar.friends,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {

    };
};

const NavFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(NavFriends);

export default NavFriendsContainer;