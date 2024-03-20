import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import auth from './auth-helper.js'
import { Navigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { signin } from './api-auth.js'

import { ContainerLoginRegister } from '../component/customstyle/CustomStyledDiv.jsx'
import { COLOR_TEXT } from './color-help.js'
import { TextFieldBlue } from '../component/customstyle/CustomStyledTextField.jsx'
import ButtonMainTheme from '../component/button/ButtonMainTheme.jsx'
import ToastMessageGeneral from '../component/modal/ToastMessageGeneral.jsx';

export default function Signin(props) {
  const location = useLocation();

  const [errToast, setErrToast] = useState("")
  const [errLoginID, setErrLoginID] = useState("")
  const [errPassword, setErrPassword] = useState("")
  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    redirectToReferrer: false
  })

  const clickSubmit = () => {
    let isError = false
    if(values.email){
      setErrLoginID("")
    } else {
      isError = true
      setErrLoginID("Please input Email!")
    }

    if(values.password){
      setErrLoginID("")
    } else {
      isError = true
      setErrPassword("Please input Password!")
    }

    if(!isError){
      const user = {
        email: values.email || undefined,
        password: values.password || undefined
      }
      console.log(user)
      signin(user).then((data) => {
        if (data.error) {
          setErrToast(data.error)
          // setValues({ ...values, error: data.error })
        } else {
          console.log(data)
          auth.authenticate(data, () => {
            setValues({ ...values, error: '', redirectToReferrer: true })
          })
        }
      })
    }
  }

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  const { from } = location.state || {
    from: {
      pathname: '/'
    }
  }
  const { redirectToReferrer } = values
  if (redirectToReferrer) {
    return <Navigate to={from} />;

  }

  return (
    <div style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
      <ToastMessageGeneral visible={errToast != ''} type={'error'} message={errToast} onRequestClosed={() => setErrToast("")} />
      <ContainerLoginRegister style={{gap: 20, paddingBottom: 50}}>
        <img src="/logo.webp" height={300} width={300} style={{borderRadius: 20}} alt={'COMP229_Group4'} />
        
        <span style={{fontSize: 24, color: COLOR_TEXT, fontWeight: 'bold'}}>Login</span>
        
        <TextFieldBlue variant="outlined" fullWidth margin='dense' style={{width: 300}} InputLabelProps={{style:{fontSize: 14}}} 
          label={"Email"} error={errLoginID != ''} helperText={errLoginID}
          onChange={handleChange('email')}/>
        
        <TextFieldBlue variant="outlined" fullWidth margin='dense' style={{width: 300}} InputLabelProps={{style:{fontSize: 14}}} 
          label={"Password"} type={'password'} error={errPassword != ''} helperText={errPassword}
          onChange={handleChange('password')}/>

        <ButtonMainTheme style={{width: 200}} textStyle={{fontSize: 24, fontWeight: 'bold'}} label={'Submit'} onClick={clickSubmit} />
      </ContainerLoginRegister>
    </div>

  )
}


