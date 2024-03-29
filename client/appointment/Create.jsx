import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, TextField, CardActions, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { create } from './api-appointment';
import auth from '../lib/auth-helper.js'
import DatePicker from "react-datepicker";
import DateCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../src/appointment.css';
import setHours from "date-fns/setHours";

import { TextFieldBlue } from '../component/customstyle/CustomStyledTextField.jsx'
import ButtonMainTheme from '../component/button/ButtonMainTheme.jsx'
import ToastMessageGeneral from '../component/modal/ToastMessageGeneral.jsx';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        marginTop: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20
    },
    title: {
        padding: theme.spacing(3, 2.5, 2),
        color: theme.palette.openTitle,
    },
    media: {
        width: 400,
        height: 400
    },
    textField: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    error: {
        color: 'red',
    },
    submit: {
        margin: '0 auto',
        marginBottom: theme.spacing(2),
    }
}));


// const create = async (user) => {
//  return { error: null }; // Simulated API call
// };
export default function Create() {
    const jwt = auth.isAuthenticated();
    //console.log(auth);
    //console.log(jwt);
    const classes = useStyles()
    const { userId } = useParams();
    const [values, setValues] = useState({
        apply_user_id: jwt.user._id,
        apply_user: jwt.user.name,
        appointment_date: '',
        is_active: true,
    });
    const [open, setOpen] = useState(false);
    const handleChange = name => event => {
        console.log(name);
        console.log(event.target);
        setValues({ ...values, [name]: event.target.value });
    };

    const handleChangeDate = (name, value) =>{
        //console.log(name);
        //console.log(value);
        setValues({ ...values, [name]: value });
    }

    const handleClose = () => {
        setOpen(false);
    };
/*
    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        read(
            {
                userId: userId
            }, 
            { t: jwt.token }, 
            signal
        ).then((data) => {
            if (data && data.error) {
                setValues({ ...values, error: data.error })
            } else {
                setValues({ ...values, apply_user: data.name })
            }
            console.log(data);
            console.log(values);
        })
        return function cleanup() {
            abortController.abort()
        }
    }, [userId]);
*/
    const clickSubmit = () => {
        const appointment = {
            apply_user_id: values.apply_user_id || undefined,
            apply_user: values.apply_user || undefined,
            appointment_date: values.appointment_date || undefined,
            is_active: true,
        };
        console.log(appointment);
        console.log(values.appointment_date );
        create(
            appointment, 
            {
                t: jwt.token
            }
        ).then((data) => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setOpen(true);
            }
        });
    };
    Create.propTypes = {
        open: PropTypes.bool.isRequired,
        handleClose: PropTypes.func.isRequired,
    };

    const [startDate, setStartDate] = useState(
        //setHours(new Date(), 16)
        //console.log("setStartDate")
      );

    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h6" className={classes.title}>
                        Create Appointment
                    </Typography>
                    <CardMedia className={classes.media} image={'./Booking.png'}/>

                    <DateCalendar value={startDate} onChange={(newValue) => handleChangeDate("appointment_date", newValue)} />
                    
                    
                </CardContent>
                <CardActions>
                    
                    <ButtonMainTheme style={{width: 200}} textStyle={{fontSize: 24, fontWeight: 'bold'}} label={'Submit'} onClick={clickSubmit} />
                </CardActions>
            </Card>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Appointment</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        New appointment successfully created.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Link to="/">
                        <Button color="primary" autoFocus variant="contained" onClick={handleClose}>
                            Appointment List
                        </Button>
                    </Link>
                </DialogActions>
            </Dialog>
        </div>
    );
}

