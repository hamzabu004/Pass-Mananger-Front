
import WrapDiv from "../components/DivWrapper/DivWrap.jsx";
import {useState} from "react";
import TextInput from "../components/TextInput/TextInput.jsx";
import Btn from "../components/button/btn.jsx";
import { Link } from "react-router-dom";
export default function Register () {
    const [username, setUsername] = useState("")
    const [pass, setpass] = useState("")
    const [repass, setrepass] = useState("")
    return(
        <div className='flex flex-col justify-center items-center h-screen mx-4 gap-3'>
            <WrapDiv className={"md:w-2/5 text-4xl justify-center"}>
                Welcome!
            </WrapDiv>
            <WrapDiv className={"md:w-2/5 justify-center"}>
                <div className={"flex flex-col w-2/3 gap-5 my-4"}>
                    <TextInput label={"Email"} />
                    <TextInput label={"Password"} />
                    <TextInput label={"Confirm Password"} />
                    <Btn label={"Login"}/>
                    <p >Already have an account? <Link to={'/login'} className={"text-text-clr cursor-pointer"}>Login</Link> </p>
                </div>
            </WrapDiv>

            <div>

            </div>
        </div>
    )
}