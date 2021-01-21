import d from "./Dialogs.module.css";

const Dialogs = (props) => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogItems}>
                <div className={d.dialog}>Sasha</div>
                <div className={d.dialog + " " + d.active}>Roman</div>
                <div className={d.dialog}>Artem</div>
            </div>
            <div className={d.messages}>
                <div className={d.message}>Hey!</div>
                <div className={d.message}>Look at me!</div>
            </div>
        </div>
    );
}

export default Dialogs;