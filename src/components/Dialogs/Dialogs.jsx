import React from "react";
import style from "./Dialogs.module.css";

function Dialogs() {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <div className={style.dialog + " " + style.active}>Oleg</div>
        <div className={style.dialog}>Svitlana</div>
        <div className={style.dialog}>Valera</div>
        <div className={style.dialog}>Andrew</div>
        <div className={style.dialog}>Maryna</div>
        <div className={style.dialog}>Kostya</div>
      </div>
      <div className={style.messages}>
        <div className={style.message}>Hi</div>
        <div className={style.message}>How are you?</div>
        <div className={style.message}>Thank you!</div>
      </div>
    </div>
  );
}

export default Dialogs;
