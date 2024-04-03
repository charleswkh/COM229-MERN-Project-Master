import mongoose from 'mongoose'
import crypto from 'crypto'
//const mongoose = require('mongoose');
const AppointmentSchema = new mongoose.Schema({
    apply_user_id:{
        type: String,
        trim: true,
        required: 'Apply User is required'
    },
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
    //,
    // doctor:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'User'
    // }
});


//module.exports = mongoose.model('User', UserSchema);
export default mongoose.model('Appointment', AppointmentSchema);
