import React from "react";
import { Wrapper, Content, PersonalImg, PersonalInfo, NewPostContainer, NewPostText, AddButton, PersonalPosts, Post } from "./Profile.styled"
import photo from '../../image/Logo.jpg';
import Preloader from "../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators/validators";

const ProfileFunctional = React.memo(props => {
    let postElements = [...props.posts]
    .reverse()
        .map(p => <Post id={p.id}>{p.post}{p.likeCount}</Post>)

    let onPostClick = (newPost) => {
        console.log(newPost);
        props.addPost(newPost.newPostText);
    }

    if (!props.profile) {
        return (<Preloader />)
    }

    return (
        <Wrapper>
            <Content>
                <PersonalImg><img src={!props.profile.photos.large ? photo : props.profile.photos.large} alt="" /></PersonalImg>
                <PersonalInfo>

                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />

                    {props.profile.fullName}
                    {props.profile.lookingForAJob}
                    {props.profile.lookingForAJobDescription}
                </PersonalInfo>

                <PersonalPosts>
                    <NewPostReduxForm onSubmit={onPostClick} />
                    {postElements}
                </PersonalPosts>
            </Content>
        </Wrapper>
    );
});

const NewPostForm = (props) => {
    return (
        <NewPostContainer onSubmit={props.handleSubmit}>
            <Field name={'newPostText'} component={'input'} validate={[required, maxLengthCreator(10)]} />
            <AddButton>Add post</AddButton>
        </NewPostContainer>
    );
}

const NewPostReduxForm = reduxForm({ form: 'newPost' })(NewPostForm);

export default ProfileFunctional;