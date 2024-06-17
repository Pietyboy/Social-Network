import React from "react";
import ProfileFunctional from "./ProfileFunctional";
import { addPost, getProfile, getStatus, updateStatus } from '../../redux/profileReducer'
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import withParams from "../../hoc/withParams";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.params.userId;
        if (!userId){
            userId = this.props.authorizedUserId;
            if (!userId){
                this.props.history.push('/login');
            }
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <ProfileFunctional
                posts={this.props.posts}
                newPostText={this.props.newPostText}
                profile={this.props.profile}
                updateNewPost={this.props.updateNewPostText}
                addPost={this.props.addPost}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />
        )
    }
}


let mapStateToProps = (state) => {
    return {
        posts: state.profile.posts,
        newPostText: state.profile.newPostText,
        profile: state.profile.profileInfo,
        userId: state.search.userId,
        status: state.profile.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, { addPost, getProfile, getStatus, updateStatus }),
    withAuthRedirect,
    withParams
)(ProfileContainer);