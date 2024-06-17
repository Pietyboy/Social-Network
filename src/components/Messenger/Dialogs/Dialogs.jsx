import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Dialog } from "./Dialogs.styled";


const Dialogs = (props) => {

    const DialogItem = (props) => {

        let path = "/messenger/" + props.id;

        return <Dialog>
            <Link to={path}>{props.name}</Link>
        </Dialog>
    }

    let dialogElements = props.data.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)

        return (
            <Wrapper>
                {dialogElements}
            </Wrapper>
        )
    }

export default Dialogs;