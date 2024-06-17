import React from "react";
import { Wrapper, Content, StatusText, StatusEdit } from "./ProfileStatus.styled";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    onEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    offEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });

    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.status != this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <Wrapper>
                {!this.state.editMode ?
                    <StatusText onDoubleClick={this.onEditMode}>
                        {this.props.status || '---'}
                    </StatusText> :

                    <StatusEdit
                        onChange={this.onStatusChange}
                        autoFocus={true}
                        onBlur={this.offEditMode}
                        onKeyUp={(e) => { if (e.key === 'Enter'){this.offEditMode()}}}
                        value={this.state.status} 
                    />
                }
            </Wrapper>
        );
    }
}

export default ProfileStatus;