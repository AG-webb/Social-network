import React from 'react';
import style from './Users.module.css';
import User from './User/User';
import Preloader from '../common/Preloader/Preloader';
import Pagination from '../common/Pagination/Pagination';

let Users = (props) => {
    let users = () => {
        return props.users
        .map(user => <User
                key={user.id}
                photos={user.photos}
                name={user.name}
                id={user.id}
                location={user.location}
                status={user.status}
                followed={user.followed}
                subscribeProgress={props.subscribeProgress}
                deleteSubscribe={props.deleteSubscribe}
                postSubscribe={props.postSubscribe}
            /> );
    }

    return (
        <div>
            <div className={style.wrapper}>
                <h1 className={style.heading}>Users</h1>
                <Pagination totalItemsCount={props.totalItemsCount} pageSize={props.pageSize} portionSize={props.portionSize} currentPage={props.currentPage} onPageChange={props.onPageChange}/>
                <div className={style.usersWrapper}>
                        { 
                            props.isFetching
                            ? <Preloader />
                            : users()
                        }
                        
                </div>
                {
                    !(props.pageSize >= 15)
                    ? <button className={`${style.moreBtn} btn`}>Show More</button>
                    : null
                }
                
            </div>
        </div>
    )
}

export default Users;