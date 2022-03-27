import React from "react";
import { useContext } from "react";
import { AppContext } from "../pages/Wordle";

function Key({ keyVal, bigKey, disabled }) {
    const { onSelectLetter, onEnter, onDelete } = useContext(AppContext);
    const selectLetter = () => {
        if (keyVal === "ENTER") {
            onEnter();
        } else if (keyVal === "DELETE") {
            onDelete()
        } else {
            onSelectLetter()
        }
    };
    return (
        <div onClick={selectLetter} className="key" id={bigKey ? "big" : disabled && "disabled"}>
            {keyVal}
        </div>
    );
}

export default Key;
