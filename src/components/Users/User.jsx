import React from "react";
import { Wrapper, Image, Descr, FollowButton, Text} from './User.styled';
import userPhoto from '../../image/Logo.jpg'
import { Link } from "react-router-dom";

let User = ({ user, getId, followingInProgress, unfollow, follow}) => {

    return (
        <Wrapper key={user.id}>
            <Link to={'/profile/' + user.id}>
                <Image onClick={() => getId(user.id)}><img src={user.photos.small != null ? user.photos.small : userPhoto} alt='' /></Image>
            </Link>
            <Descr>
                <Text>{user.name}</Text>
                <Text>{user.status}</Text>
            </Descr>
            {user.followed ?
                <FollowButton disabled={followingInProgress.some(id => id === user.id)} onClick={() => { unfollow(user.id) }}>Unfollow</FollowButton> :
                <FollowButton disabled={followingInProgress.some(id => id === user.id)} onClick={() => { follow(user.id) }}>Follow</FollowButton>}
        </Wrapper>
    )
}

export default User;