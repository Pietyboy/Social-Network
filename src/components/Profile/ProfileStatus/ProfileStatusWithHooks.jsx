import React, { useEffect, useState } from "react";
import { Wrapper, Content, StatusText, StatusEdit } from "./ProfileStatus.styled";


const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const onEditMode = () => {
        setEditMode(true);
    }

    const offEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <Wrapper>
                {!editMode ?
                    <StatusText onDoubleClick={onEditMode}>
                        {props.status || '---'}
                    </StatusText> :

                    <StatusEdit
                        onChange={onStatusChange}
                        autoFocus={true}
                        onBlur={offEditMode}
                        onKeyUp={(e) => { if (e.key === 'Enter'){offEditMode()}}}
                        value={status} 
                    />
                }
            </Wrapper>
    );
}

export default ProfileStatusWithHooks;