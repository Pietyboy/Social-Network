import React from "react";
import { Wrapper, Content, LogoImg, Button } from './Header.styled';
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <Wrapper>
            <LogoImg src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" alt="logo" />
            {props.isAuth ?
                <Content>
                    {props.login}
                    <Button onClick={props.logout}>Log Out</Button>
                </Content> 
                :
                <Content>
                    <Link to='/login'><Button >Log In</Button></Link>
                    <Button>Sign Up</Button>
                </Content>
            }
        </Wrapper>
    );
}

export default Header;