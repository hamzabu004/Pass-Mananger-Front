import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import './TextInput.css'
import Tooltip from '@mui/material/Tooltip';

    const CssTextField = styled(TextField)(({validInput, value}) => ({
    "& .Mui-error": {
        borderColor: 'red'
      },
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
      borderColor: (!validInput && value !== "") ? "red" : '#FFB300',
        color: '#FFB300',
        borderRadius: 0
    },
    '&:hover fieldset': {
      borderColor: '#ffffff',
    },
    '&.Mui-focused fieldset': {
      borderColor: (!validInput && value !== "") ? "red" : '#FFB300',
      // borderColor: 'red',
    },
  },
}));
export default function TextInput (props) {

    return(
        <Tooltip title={ !props.validInput ? props.toolpitTitle : ""}  disableHoverListener={!props.validInput} disableFocusListener={props.validInput}>
        <CssTextField
            sx={{
                ":root": {
                    input:{
                        textSize: 5
                    }
                }
            }}
            validInput={props.validInput}
            size={"small"}
            label={props.label}
            error={false}
            value={props.value}
            onChange={(e) => props.handler(e, props.setChange)}
            onKeyUp={props.handleUP}
            onKeyDown={props.handleDN}

        >

        </CssTextField>
        </Tooltip>
    )
}