import mongoose from 'mongoose'
import crypto from 'crypto'
//const mongoose = require('mongoose');
const AppointmentSchema = new mongoose.Schema({
    
    apply_user: {
        type: String,
        trim: true,
        required: 'Apply User is required'
    },
    appointment_date: {
        type: Date,
        default: Date.now
    },
    is_active:{
        type: Boolean,
        default : true
    }
});


//module.exports = mongoose.model('User', UserSchema);
export default mongoose.model('Appointment', AppointmentSchema);
