import WrapDiv from "../components/DivWrapper/DivWrap.jsx";
import {useEffect, useState} from "react";
import TextInput from "../components/TextInput/TextInput.jsx";
import Btn from "../components/button/btn.jsx";
import { Link } from "react-router-dom";
import Alert from '@mui/material/Alert';
import {useDispatch} from "react-redux";

export default function Register () {
    let typingTimer;
    let doneTypingInterval = 2000;


    const PASS_REGEX = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/
    const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const USERNAME_REGEX = /^(?=.*\d)[a-z_\d]{8,20}$/
    function handleRegister(e) {
        setLoading(true)

    }
    function handleEmailChange(e, handler){
        handler(e.target.value)
        const validity = e.target.value.match(EMAIL_REGEX)
        setValidMail(validity)
    }
    function handlePassChange(e, handler){
        handler(e.target.value)
        const validity = e.target.value.match(PASS_REGEX)
        setValidPwd(validity)
    }
    function handleRePassChange(e, handler){
        handler(e.target.value)
        const validity = e.target.value === pass
        setValidRePwd(validity)
    }

    function handleUsernameChange(e, handler){
        handler(e.target.value)
        const validity = e.target.value.match(USERNAME_REGEX)
        setvalidUsername(validity)
    }

    const [username, setUsername] = useState("")
    const [usernameAvailable, setusernameAvailable] = useState(true)
    const [usernameLoad, setusernameLoad] = useState(false)
    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")
    const [repass, setrepass] = useState("")

    const [validMail, setValidMail] = useState(false)
    const [validUsername, setvalidUsername] = useState(false)
    const [validPwd, setValidPwd] = useState(false)
    const [validRePwd, setValidRePwd] = useState(false)

    const [alert, setAlert] = useState(false)

    const [allValid, setAllValid] = useState(false)

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (validMail && validPwd && validRePwd && validUsername)
            setAllValid(true)
    }, [validMail, validPwd, validRePwd, validUsername]);

    function handleKeyup () {
      clearTimeout(typingTimer);
      typingTimer = setTimeout(doneTyping, doneTypingInterval);
    }

    //on keydown, clear the countdown
    function handleKeydown () {
      clearTimeout(typingTimer);
    }

    function doneTyping () {
        //do something
        console.log(username)
    }

    return(
        <div className='flex flex-col justify-center items-center h-screen mx-4 gap-3'>
            <Alert
                sx={{
                    color: "#32CD32"
            }}
                style={{display: alert ? "" : "none"}}
                variant={'outlined'}
                severity={"success"}
            >
                Registered Successfully. Check email for activation link
            </Alert>
            <WrapDiv className={"md:w-2/5 text-4xl justify-center"}>
                Welcome!
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
                        handleUP={handleKeyup}
                        handleDN={handleKeydown}
                    />
                    {(usernameAvailable && validUsername)  && <p>username available ✅</p>}
                    {(usernameLoad && validUsername)  && <p>checking username availbility</p>}
                    <TextInput
                        validInput={validMail}
                        value={email}
                        handler={handleEmailChange}
                        setChange={setemail}
                        label={"Email"}
                        toolpitTitle={"Invalid Email"}
                    />

                    <TextInput
                        validInput={validPwd}
                        value={pass}
                        handler={handlePassChange}
                        setChange={setpass}
                        label={"Password"}
                        toolpitTitle={"Password Should be of \n1. Length Between 8 - 20\n2.Atleast one symbol\n3. One Upper and Lower case\n4. one diit"}
                    />
                    <TextInput
                        validInput={validRePwd}
                        value={repass}
                        handler={handleRePassChange}
                        setChange={setrepass}
                        label={"Confirm Password"}
                    />

                    <Btn
                        disable={allValid}
                        load={loading}
                        onClick={handleRegister}
                        label={"Register"}
                    />
                    <p>
                        Already have an account?
                        <Link
                            to={'/login'}
                            className={"text-text-clr cursor-pointer"}
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </WrapDiv>

            <div>

            </div>
        </div>
    )
}