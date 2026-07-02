import React from "react";
import "./SignUp.css"
import { useState } from "react";
import { useForm } from "react-hook-form";


export default function SignUp(){
    const [email, Setemail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);

    const infoSubmit = (data) => {
        console.log("email:", email, "password:", password);
        alert(`email: ${email} password: ${password}`);
        e.preventDefault();
        if(localStorage.getItem("user")){
            const storedUser = JSON.parse(localStorage.getItem("user"));
            if(storedUser.email === email && storedUser.password === password){
                alert("User already exists. Please login.")
            } else {
                const newUser = {email, password};
                localStorage.setItem("user", JSON.stringify(newUser));
                setUser(newUser);
                alert("User registered successfully!");
            }

    }



    const { register, handleSubmit, formState: {errors},} = useForm();



    return(
        <>
            <p>This is login</p>
            <form onSubmit={handleSubmit(infoSubmit)}>
                <input className="inputbox" type="email" placeholder="email" {...register("email", {required: "Email is required"})}/>{errors.email && <span style={{color:'red'}}>{errors.email.message}</span>}
                <input className="inputbox" type="password" placeholder="password" {...register("password", {required: "Password is required"})} onChange={(e)=>{setPassword(e.target.value)}} />{errors.password && <span style={{color:'red'}}>{errors.password.message}</span>}
                <button className="login-button" type="submit" onSubmit={infoSubmit}>Login</button>
            </form>
        </>
    )
}