
import Button from '@mui/material/Button';
import { styled } from "@mui/material/styles";
import {useDispatch} from "react-redux";
import {genPass} from "../../Reducers/passReducer.js";

const ColorButton = styled(Button)(({ theme }) => ({
    color: '#FFB300',
    border: "1px solid",
    backgroundColor: "transparent",
    borderColor: '#FFB300',
    width: "100%",
    borderRadius: '0',
    "&:hover": {
      backgroundColor: '#FFB300',
      color: '#24232b',
    }
  }));

function Btn(props) {
    const dispatch = useDispatch()
  return (
    <ColorButton onClick={() => {dispatch((genPass()))}} mx={{
        'color': '#FFB300'
    }}>
        <span className='font-roboto font-medium'>{props.label}</span>
    </ColorButton>
  )
}

export default Btn