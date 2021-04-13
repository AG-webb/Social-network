import React from 'react';
import Users from "./Users"
import { connect } from 'react-redux';
import { setCurrentPage, getUsers, deleteSubscribe, postSubscribe} from '../../redux/users-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getUsersSelector, getFetching, getPageSize, getTotalItemsCount, getCurrentPage, getSubscribeProgress, getPortionSize } from '../../redux/users-selectors';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    }
    
    render() {
        return <> 
            <Users
                {...this.props}
                onPageChange={this.onPageChange}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        isFetching: getFetching(state),
        pageSize: getPageSize(state),
        portionSize: getPortionSize(state),
        totalItemsCount: getTotalItemsCount(state),
        currentPage: getCurrentPage(state),
        subscribeProgress: getSubscribeProgress(state),
    };
};

export default compose(
    connect(mapStateToProps, {
        setCurrentPage,
        getUsers,
        deleteSubscribe,
        postSubscribe,
    }),
    withAuthRedirect,
)(UsersContainer);