import d from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/dialogs-reducer";

// const DialogItem = (props) => {
//     let path = `/dialogs/${props.id}`;
//     return (
//         <div className={d.dialog + " " + d.active}>
//             <NavLink to={path}>{props.name}</NavLink>
//         </div>
//     );
// }

// const Message = (props) => {
//     return (
//         <div className={d.message}>{props.message}</div>
//     );
// }

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = state.messages.map(message => <Message message={message.message} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }


    return (
        <div className={d.dialogs}>
            <div className={d.dialogItems}>
                {dialogsElements}
            </div>
            <div className={d.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div className={d.containerWriteText}><textarea placeholder="Enter your message" value={newMessageBody} onChange={onNewMessageChange} className={d.writeText}></textarea></div>
                    <div className={d.sendMessage}><button onClick={onSendMessageClick}>Send message</button></div>
                </div>

            </div>
        </div>
    );
}

export default Dialogs;