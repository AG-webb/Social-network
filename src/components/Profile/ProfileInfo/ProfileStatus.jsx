import React, { useState, useEffect } from 'react';

const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    let activateEditMode = () => {
        setEditMode(true);
    }
    let deActivateEditMode = () => {
        setEditMode(false);

        props.updateStatus(status);
    }

    useEffect( () => {
        setStatus(props.status);
    }, [props.status] );

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            { !editMode
            ?   <div>
                    <span onDoubleClick={ activateEditMode }>{ props.status || "No Status yet!"}</span>
                </div>
            :   <div>
                    <input onChange={ onStatusChange } autoFocus={true} onBlur={ deActivateEditMode } type="text" value={status}/>
                </div>
            }
        </div>
    );
}

export default ProfileStatus;