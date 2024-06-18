import React from "react";
import ProfileFunctional from "./ProfileFunctional";
import { addPost, getProfile, getStatus, updateStatus, savePhoto } from '../../redux/profileReducer'
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import withParams from "../../hoc/withParams";


class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.params.userId;
        console.log('this.props.params.userId = ' + userId)
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login');
            }
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, nextProps, snapshot) {
        if (this.props.params.userId != prevProps.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <ProfileFunctional
                isOwner={!this.props.params.userId}
                posts={this.props.posts}
                newPostText={this.props.newPostText}
                profile={this.props.profile}
                updateNewPost={this.props.updateNewPostText}
                addPost={this.props.addPost}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                savePhoto={this.props.savePhoto}
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
    connect(mapStateToProps, { addPost, getProfile, getStatus, updateStatus, savePhoto }),
    withAuthRedirect,
    withParams
)(ProfileContainer);