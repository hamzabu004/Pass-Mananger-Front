import React, {useEffect} from 'react'
import './PassGenerate.css'
import PassGen from '../components/PassGen/PassGen'
import PassShow from '../components/PassShow/PassShow'
import {genPass} from "../Reducers/passReducer.js";
import {useDispatch} from "react-redux";

function PassGenerator() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(genPass())
    }, []);
  return (
    <div className='flex flex-col justify-center items-center w-full gap-3 p-4'>
        <h1 className={"font-roboto text-lg opacity-80"}>Password Generator</h1>
        <PassShow/>
        <PassGen/>

    </div>
  )
}

export default PassGenerator  