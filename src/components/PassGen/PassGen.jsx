import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Slid from '../CustomSlider/slid'
import CheckBox from '../checkbox/checkbox'
import Btn from '../button/btn'
import Strength from '../strengthDiv/Strength'
import {genPass} from "../../Reducers/passReducer.js";

function PassGen() {
    const dispatch = useDispatch()
    const [disable, setDisable] = useState(true)
    const UpperChecked = useSelector((state) => state.password.passType[0])
    const LowerChecked = useSelector((state) => state.password.passType[1])
    const DigitChecked = useSelector((state) => state.password.passType[2])
    const SymbolsChecked = useSelector((state) => state.password.passType[3])

    const {length} = useSelector((state) => state.password)

    function handleGenerate(e){
        dispatch(genPass())
    }

    useEffect(() => {
        if (!(UpperChecked || LowerChecked || DigitChecked || SymbolsChecked))
            setDisable(true)
        else
            setDisable(false)
    }, [UpperChecked, LowerChecked, DigitChecked, SymbolsChecked]);
  return (
    <div className='flex flex-col  bg-main-back w-full md:w-2/5 px-5 py-6 font-roboto gap-2 p-4'>
        <div className='flex flex-row justify-between items-center'>
            <p className='text-sm'>Character Length</p>
            <p className='text-text-clr text-lg'>{length}</p>
        </div>
        <Slid/>
        
        <CheckBox idx={0} checked={UpperChecked} label="Include uppercase"/>
        <CheckBox idx={1} checked={LowerChecked} label="Include lowercase"/>
        <CheckBox idx={2} checked={DigitChecked} label="Include Numbers"/>
        <CheckBox idx={3} checked={SymbolsChecked} label="Include Symbols"/>


        <div className='flex flex-row justify-between items-center bg-windows-back p-4'>
            <p className='opacity-60 text-sm'>STRENGTH</p>
            <Strength/>
        </div>
        <Btn
            disable={!disable}
            load={false}
            onClick={handleGenerate}
            label="Generate"/>
    </div>
  )
}

export default PassGen