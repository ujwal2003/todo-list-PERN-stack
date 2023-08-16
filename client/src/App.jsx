import React, { Fragment } from "react";

import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";

export default function App() {
    return (
        <Fragment>
            <div className="container">
                <InputTodo />
                <ListTodo />
            </div>
        </Fragment>
    );
}