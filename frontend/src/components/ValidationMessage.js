import React from "react";
import { capitalizeFirstLetter } from "../utils/helper.js";

function ValidationMessage({ msgValue }) {
    const message = msgValue ? capitalizeFirstLetter(msgValue?.message) : "";
    return (
        <div className="text-danger">
            <small>{message}</small>
        </div>
    );
}

export default ValidationMessage;
