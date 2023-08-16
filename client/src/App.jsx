import React, { Fragment } from "react";

import InputTodo from "./components/InputTodo";

export default function App() {
    return (
        <Fragment>
            <div className="container">
                <InputTodo />
            </div>
        </Fragment>
    );
}