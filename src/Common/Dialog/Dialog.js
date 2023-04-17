import React from "react";
import "./Dialog.css";
import {EDialogTypes} from "../../Utils/Enums";

const Dialog = ({dialog}) => (
  <div className="Dialog">
    <div className="dialog-header">{dialog.type.value}</div>
    <div
      className="dialog-body"
      dangerouslySetInnerHTML={{
        __html: dialog.message.replace(/(?:\r\n|\r|\n)/g, "<br/>"),
      }}
    />
    <div className="dialog-footer">
      {dialog.type === EDialogTypes.CONFIRM && (
        <>
          <button
            className="button cancel"
            onClick={() => {
              dialog.onCancel();
            }}
          >
            Annuler
          </button>
          <button
            className="button confirm"
            onClick={() => {
              dialog.onConfirm();
            }}
          >
            Confirmer
          </button>
        </>
      )}
      {dialog.type === EDialogTypes.ALERT && (
        <button
          className="button cancel"
          onClick={() => {
            dialog.onCancel();
          }}
        >
          ok
        </button>
      )}
    </div>
  </div>
);
export default Dialog;
