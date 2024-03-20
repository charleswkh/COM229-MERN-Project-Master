import { CircularProgress } from '@material-ui/core';
import { COLOR_THEME_DARK } from '../../lib/color-help';

export default function ButtonMainTheme({style, textStyle, label, onClick, disabled, isLoading=false}){

    return (
        <div style={{width: '100%', height: 52, borderRadius: 8, display: 'flex', 
            justifyContent: 'center', alignItems: 'center', 
            backgroundColor: disabled ? '#0088FF66' : COLOR_THEME_DARK,
            cursor: disabled || isLoading ? 'auto' : 'pointer', 
            ...style}}
            onClick={disabled || isLoading ? null : onClick}>
            {
                isLoading ? (<CircularProgress size={24} sx={{color: 'white'}} />) : (<span style={{fontSize: 14, color: '#FFFFFF', fontWeight: 'bold', ...textStyle}}>{label}</span>)
            }
        </div>
    )
}