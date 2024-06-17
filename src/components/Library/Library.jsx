import React from "react";
import { Wrapper, Content, Button, ListOptions, ListItem } from './Library.styles';

const Library = () => {
    return ( 
        <Wrapper>
            <Button>My media</Button>
            <ListOptions>
                <ListItem>Playlists</ListItem>
                <ListItem>Albums</ListItem>
                <ListItem>Artists</ListItem>
                <ListItem>Songs</ListItem>
            </ListOptions>
            <Content>
                
            </Content>
        </Wrapper>
     );
}
 
export default Library;