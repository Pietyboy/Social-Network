import React from "react";
import { Link } from "react-router-dom";
// Components
import Library from "../Library/Library";
// Styles
import { Wrapper, Content, Button } from './SideBar.styles';

const SideBar = () => {
    return (
        <Wrapper>
            <Content>
                <Button>
                    <Link to="/">Home</Link>
                    </Button>
                <Button>
                    <Link to="/search">Search</Link>
                </Button>
                <Button>
                    <Link to='/profile'>Profile</Link>
                </Button>
                <Button>
                    <Link exact to="/messenger">Messenger</Link>
                </Button>
            </Content>
            <Content>
                <Library />
            </Content>
        </Wrapper>
    );
}
 
export default SideBar;