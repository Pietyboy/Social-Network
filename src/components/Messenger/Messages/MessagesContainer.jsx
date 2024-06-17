import Messages from "./Messages";
import { newMessageActionCreator} from "../../../redux/messangerReducer"
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        data: state.messenger.messages,
        newMessageText: state.messenger.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        newMessage: (text) => dispatch(newMessageActionCreator(text))
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps) (Messages);

export default MessagesContainer;