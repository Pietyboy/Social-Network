import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        data: state.messenger.dialogs,
    }
}

const DialogsContainer = connect(mapStateToProps) (Dialogs)

export default DialogsContainer;