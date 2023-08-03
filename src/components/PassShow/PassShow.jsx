
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import {useSelector} from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PassShow() {

    const password = useSelector((state) => state.password.pass)
    function handleCopyPass(e){
        navigator.clipboard.writeText(password)
        toast("Copied to Clipboard")
    }
    function handleSavePass(e){
        navigator.clipboard.writeText(password)
        toast("Hell")
    }

  return (
    <div className='flex flex-row w-full md:w-2/5 justify-between bg-main-back font-roboto p-4'>
            <Link to={"/register"}> <p className='font-bold'>{password}</p></Link>
            <div  className=''>
                <span 
                    className='mx-2 inline-block cursor-pointer' 
                    onClick={handleCopyPass}
                >
                    <ContentCopyIcon 
                        sx={{ "&:hover": { color: "orange" } }}
                        style={{
                            
                        }} />
                </span>
                <span 
                    onClick={handleSavePass} 
                    className='mx-2 inline-block cursor-pointer' 
                >
                    <LibraryAddOutlinedIcon 
                    sx={{ "&:hover": { color: "orange" } }}
                    />
                </span>
                <ToastContainer
            position={"top-center"}
            autoClose={3000}
            hideProgressBar={true}
            theme={'light'}
            closeButton={false}
        />
            </div>

    </div>


  )
}

export default PassShow