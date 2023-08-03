import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import './TextInput.css'
const CssTextField = styled(TextField)({
    width: '100%',
    '& input': {
        color: 'white',

    },
    '& label' : {
        color: '#ffffff',
        opacity: '.5'


    },
  '& label.Mui-focused': {
    color: '#FFB300',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#FFB300',
  },
  '& .MuiOutlinedInput-root': {

    '& fieldset': {
      borderColor: '#FFB300',
        color: '#FFB300',
        borderRadius: 0
    },
    '&:hover fieldset': {
      borderColor: '#ffffff',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#FFB300',
    },
  },
});
export default function TextInput (props) {
    return(
        <CssTextField sx={{
            ":root": {
                input:{
                    textSize: 5
                }
            }
        }} size={"small"} label={props.label} >

        </CssTextField>
    )
}