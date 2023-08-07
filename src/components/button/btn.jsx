import Button from '@mui/material/Button';
import { styled } from "@mui/material/styles";
import {useDispatch} from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';

const ColorButton = styled(Button)(({ theme}) => ({

    color: '#FFB300',
    border: "1px solid",
    backgroundColor: "transparent",
    borderColor: '#FFB300',
    width: "100%",
    borderRadius: '0',
    "&:hover": {
      backgroundColor: '#FFB300',
      color: '#24232b',
    },
    "&:disabled":{
        color: "#a17100",
        borderColor: "#a17100",
        cursor: "pointer",
    }
  }));

function Btn(props) {
  return (
    <ColorButton
        disabled={!props.disable}
        onClick={(e) => {props.onClick()}}
        mx={{
            'color': '#FFB300'
        }}
    >
        { !props.load && <span className='font-roboto font-medium'>{props.label}</span>}
        { props.load && <CircularProgress size={20} color={"inherit"}/> }
    </ColorButton>
  )
}

export default Btn