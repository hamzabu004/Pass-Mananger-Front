import React from 'react'
import { Checkbox } from '@mui/material'
import FormGroup from '@mui/material/FormGroup';
import { FormControlLabel } from '@mui/material';
import {useDispatch} from "react-redux";
import {change_pass_type} from "../../Reducers/passReducer.js";

function CheckBox(props) {
    const dispatch = useDispatch()
  return (
    <FormGroup>
        <FormControlLabel  
            control={
                <Checkbox 
                checked={props.checked}
                onClick={() => dispatch(change_pass_type({index: props.idx, state: !props.checked}))}
                sx={{
                    'color': '#FFB300',
                    '&.Mui-checked': {
                        color: '#FFB300',
                      },
                      

                }} />
            } 
            label={<span className='font-roboto'>{props.label}</span>}
        />
    </FormGroup>
   
  )
}

export default CheckBox