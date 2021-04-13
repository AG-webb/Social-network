import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfile, getStatus, updateStatus, uploadPhoto, saveProfileInfo } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = this.props.authUserId;
            if(!userId) {
                this.props.history.push("/login");
            }
        }
        
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }
    
    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return <Profile {...this.props} isOwner={!this.props.match.params.userId}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        profileEditSuccess: state.profilePage.profileEditSuccess,
        status: state.profilePage.status,
        authUserId: state.auth.userId,
    }
}

export default compose(
    connect(mapStateToProps, {
        getProfile,
        getStatus,
        updateStatus,
        uploadPhoto,
        saveProfileInfo,
    }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);