/* eslint-disable no-unused-vars */
import WrapDiv from "../components/DivWrapper/DivWrap.jsx";
import {useEffect, useState} from "react";
import TextInput from "../components/TextInput/TextInput.jsx";
import Btn from "../components/button/btn.jsx";
import { Link } from "react-router-dom";
export default function Login () {
    const USERNAME_REGEX = /^(?=.*\d)[a-z_\d]{8,20}$/
    const PASS_REGEX = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/


    function handleEmailChange(e, handler){
        handler(e.target.value)
        const validity = e.target.value.match(USERNAME_REGEX)
        setvalidUsername(validity)
    }
    const [username, setUsername] = useState("")
    const [pass, setpass] = useState("")
    const [validUsername, setvalidUsername] = useState(false)
    const [validPwd, setValidPwd] = useState(false)
    const [allValid, setAllValid] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (validUsername && validPwd)
            setAllValid(true);
        else
            setAllValid(false);

    }, [validPwd, validUsername]);
    function handleUsernameChange(e, handler){
        handler(e.target.value)
        const validity = e.target.value.match(USERNAME_REGEX)
        setvalidUsername(validity)
    }

    function handlePassChange(e, handler){
        handler(e.target.value)
        const validity = e.target.value.match(PASS_REGEX)
        setValidPwd(validity)
    }

    function handleLogin(){
        setLoading(true)
    }

    return(
        <div className='flex flex-col justify-center items-center h-screen mx-4 gap-3'>
            <WrapDiv className={"md:w-2/5 text-4xl justify-center"}>
                Welcome Back!
            </WrapDiv>
            <WrapDiv className={"md:w-2/5 justify-center"}>
                <div className={"flex flex-col w-2/3 gap-5 my-4"}>
                    <TextInput
                        validInput={validUsername}
                        value={username}
                        handler={handleUsernameChange}
                        setChange={setUsername}
                        label={"Username"}
                        toolpitTitle={"Username must've one digit. Length should between 8 - 20. Can have underscore and lowercase letters"}
                    />
                    <TextInput
                        validInput={validPwd}
                        value={pass}
                        handler={handlePassChange}
                        setChange={setpass}
                        label={"Password"}
                        toolpitTitle={"Password Should be of \n1. Length Between 8 - 20\n2.Atleast one symbol\n3. One Upper and Lower case\n4. one diit"}
                    />
                    <Btn
                        disable={allValid}
                        load={loading}
                        onClick={handleLogin}
                        label={"Login"}
                    />
                    <p >Don't have account? <Link to={'/register'} className={"text-text-clr cursor-pointer"}>Register</Link> </p>
                </div>
            </WrapDiv>

            <div>

            </div>
        </div>
    )
}