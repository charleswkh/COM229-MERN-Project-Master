import Appointment from '../models/appointment.model.js';
import extend from 'lodash/extend.js';
import errorHandler from './error.controller.js';

const create = async (req, res) => {
    const appointment = new Appointment(req.body);
    try {
        //console.log(req.body);
        await appointment.save();
        return res.status(200).json({
            message: "Successfully Create!"
        });
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        });
    }
}
const list = async (req, res) => {
    try {
        let queryAry = {};
        if (req.query.apply_user){
            queryAry["apply_user"] = req.query.apply_user;
        }
        if (req.query.apply_user_id){
            queryAry["apply_user_id"] = req.query.apply_user_id;
        }

        let appointments = await Appointment.find(queryAry).select('apply_user_id apply_user appointment_date is_active');
        res.json(appointments);
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        });
    }
}
const appointmentByID = async (req, res, next, id) => {
    try {
        let appointment = await Appointment.findById(id)
        if (!appointment)
            return res.status('400').json({
                error: "Appointment not found"
            })
        req.profile = appointment;
        next()
    } catch (err) {
        return res.status('400').json({
            error: "Could not retrieve appointment"
        })
    }
}
const read = (req, res) => {
    //console.log("read");
    return res.json(req.profile);
}

const update = async (req, res) => {
    try {
        let appointment = req.profile;
        appointment = extend(appointment, req.body);
        //appointment.updated = Date.now()
        await appointment.save();
        res.json(appointment);
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const remove = async (req, res) => {
    try {
        console.log(remove);
        let appointment = req.profile
        let deletedAppointment = await appointment.deleteOne()
       
        res.json(deletedAppointment)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}
export default { create, appointmentByID, read, list, remove, update }
