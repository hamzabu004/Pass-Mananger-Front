
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {change_length} from "../../Reducers/passReducer.js";

function Slid() {
    const dispatch = useDispatch()
    const {length} = useSelector((state) => state.password)


    function handleSLiderChange(e, val){
        dispatch(change_length(val))
    }
  return (
    <Slider sx={{
        'color': '#FFB300',
        '&.Mui-checked': {
            color: '#FFB300',
          },
          'fontFamily': 'Roboto Mono'
    }}
    min={6}
    max={30}
    step={1}
    value={length}
    onChange={handleSLiderChange}
    />
  )
}

export default Slid