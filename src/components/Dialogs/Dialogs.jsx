import d from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from 'react';

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

    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = props.state.messages.map(message => <Message message={message.message} />);
    let textarea = React.createRef();

    let sendMessage = () => {
        let textMessage = textarea.current.value;
        alert(textMessage);
    }



    return (
        <div className={d.dialogs}>
            <div className={d.dialogItems}>
                {dialogsElements}
            </div>
            <div className={d.messages}>
                {messagesElements}
                <div>
                    <div className={d.containerWriteText}><textarea ref={textarea} className={d.writeText}></textarea></div>
                    <div className={d.sendMessage}><button onClick={sendMessage}>Send message</button></div>
                </div>

            </div>
        </div>
    );
}

export default Dialogs;