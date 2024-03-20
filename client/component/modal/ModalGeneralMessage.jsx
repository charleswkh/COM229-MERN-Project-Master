
import { Modal } from "@material-ui/core"
import ButtonMainTheme from "../button/ButtonMainTheme"

export default function ModalGeneralMessage({visible, onRequestClosed, message, buttonText}){

    return (
        <Modal open={visible} onClose={onRequestClosed}  style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{width: 300, maxHeight: '70%', display: 'flex', borderRadius: 20, flexDirection: 'column',
                padding: 20, backgroundColor: 'white', alignItems: 'center',  outline: 'none'}}>
                <span style={{fontSize: 14, color: '#414042', fontWeight: 'bold', textAlign: 'center'}}>{message}</span>

                <ButtonMainTheme label={buttonText?? 'Confirm'} style={{maxWidth: 120, height: 36, marginTop: 20, paddingLeft: 15, paddingRight: 15}} 
                    onClick={() => onRequestClosed()} />
            </div>
        </Modal>
    )
}