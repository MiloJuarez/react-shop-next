import React from "react";
import "@styles/NotFound.scss";

const NotFound = () => {
    return (
        <div class="NotFound-container">
            <p class="NotFound__message">Recurso no encontrado :(</p>
            <p class="NotFound__message NotFound__message--animated hinge">
                404
            </p>
        </div>
    );
};

export default NotFound;
