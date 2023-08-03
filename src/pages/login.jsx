
import WrapDiv from "../components/DivWrapper/DivWrap.jsx";
import {useState} from "react";
import TextInput from "../components/TextInput/TextInput.jsx";
import Btn from "../components/button/btn.jsx";
export default function Login () {
    const [username, setUsername] = useState("")
    const [pass, setpass] = useState("")
    return(
        <div className='flex flex-col justify-center items-center h-screen mx-4 gap-3'>
            <WrapDiv className={"md:w-2/5 text-4xl justify-center"}>
                Welcome Back!
            </WrapDiv>
            <WrapDiv className={"md:w-2/5 justify-center"}>
                <div className={"flex flex-col w-2/3 gap-5 my-4"}>
                    <TextInput label={"Email"} />
                    <TextInput label={"Password"} />
                    <Btn label={"Login"}/>
                    <p >Don't have account? <a href={'/register'} className={"text-text-clr cursor-pointer"}>Register</a> </p>
                </div>
            </WrapDiv>

            <div>

            </div>
        </div>
    )
}