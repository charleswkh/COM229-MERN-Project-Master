import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, TextField, CardActions, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { create } from './api-appointment';

import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import "react-datepicker/dist/react-datepicker.css";

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 400,
        margin: '0 auto',
        marginTop: theme.spacing(3),
        padding: theme.spacing(2),
        textAlign: 'center',
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
    },
    title: {
        fontSize: 18,
    },
}));
// const create = async (user) => {
//  return { error: null }; // Simulated API call
// };
export default function Create() {
    
    const classes = useStyles();
    const [values, setValues] = useState({
        apply_user: 'Gavin',
        appointment_date: '',
        is_active: true,
    });
    const [open, setOpen] = useState(false);
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };
    const handleClose = () => {
        setOpen(false);
    };
    const clickSubmit = () => {
        const appointment = {
            apply_user: values.apply_user || undefined,
            appointment_date: values.appointment_date || undefined,
            is_active: true,
        };
        create(appointment).then((data) => {
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
      );

    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h6" className={classes.title}>
                        Create Appointment
                    </Typography>

                    <TextField
                        id="apply_user"
                        label="Name"
                        className={classes.textField}
                        value={values.apply_user}
                        onChange={handleChange('apply_user')}
                        margin="normal"
                    />
                   <DatePicker showTimeSelect
                        id = "appointment_date"
                        selected={startDate} 
                        onChange={(date) => setStartDate(date)}
                        excludeTimes={[
                                new Date(new Date().setHours(new Date().getHours(), new Date().getMinutes()))
                            ]}
                        dateFormat="MMMM d, yyyy HH:mm"
                    />
                    
                </CardContent>
                <CardActions>
                    <Button color="primary" variant="contained" onClick={clickSubmit}
                        className={classes.submit}>
                        Submit
                    </Button>
                </CardActions>
            </Card>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Appointment</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        New appointment successfully created.
                    </DialogContentText>
                </DialogContent>
                
            </Dialog>
        </div>
    );
}

