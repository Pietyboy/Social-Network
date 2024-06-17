import React from "react";
// Components
import DialogsContainer from "./Dialogs/DialogsContainer";
import MessagesContainer from "./Messages/MessagesContainer";
import { Wrapper } from "./Messenger.styled";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";


class Messenger extends React.Component {
    render() {
        return (
            <Wrapper>
                <DialogsContainer />
                <MessagesContainer />
            </Wrapper>
        )
    }
}

export default withAuthRedirect(Messenger);