import { Snackbar } from "@material-ui/core"
import { useEffect, useState } from "react";
import CloseIcon from '@material-ui/icons/Close';
import CancelIcon from '@material-ui/icons/Cancel';
import DoneIcon from '@material-ui/icons/Done';
import { COLOR_HEADER_BACKGROUND } from "../../lib/color-help";


export default function ToastMessageGeneral({visible, onRequestClosed, type='general', message}){
    const [cachedMessage, setCachedMessage] = useState('')

    useEffect(() => {
        // special logic to prevent message in toast box disappear immediately
        if(message && message != cachedMessage){
            setCachedMessage(message)
        }
    },[message])


    function getPrefixIcon(){
        if(type == 'success' || type == 'general'){
            return (
                <div style={{marginRight: 8,  width: 24, height: 24, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <DoneIcon style={{fontSize: 24, color: "green"}}/> 
                </div>
            )
        } else if(type == 'error'){
            return (
                <div style={{marginRight: 8,  width: 24, height: 24, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <CancelIcon style={{fontSize: 24, color: "red"}}/> 
                </div>
            )
        }
        return null
    }

    return (
        <Snackbar open={visible} autoHideDuration={6000} onClose={onRequestClosed} anchorOrigin={{vertical: 'bottom', horizontal: 'center' }} >
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '12px 16px', borderRadius: 8,
                backgroundColor: 'white', boxShadow: '2px 4px 10px rgba(0, 0, 0, 0.25)'}}>

                {getPrefixIcon()}

                <span style={{fontSize: 14, color: '#414042'}}>{cachedMessage}</span>

                <div style={{marginLeft: 5, cursor: 'pointer', width: 24, height: 24, 
                    display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={onRequestClosed}>
                    <CloseIcon style={{fontSize: 16, color: COLOR_HEADER_BACKGROUND}}/> 
                </div>
            </div>
        </Snackbar>
    )

}