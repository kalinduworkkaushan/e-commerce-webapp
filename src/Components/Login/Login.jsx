import React, {useState} from "react";
import {useForm,submitHandler} from react-hook-form;

export default function Login(){
    return(
        <div className="login-container">
            <div className="form-container">
                <form>
                    <input type="email">email</input>
                    <input type="password">password</input>
                </form>
            </div>
        </div>
    )
}