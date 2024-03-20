import express from 'express'
import appointmentCtrl from '../controllers/appointment.controller.js'
// import authCtrl from '../controllers/auth.controller'
import authCtrl from '../controllers/auth.controller.js'

const router = express.Router();

router.route('/api/appointment').post(authCtrl.requireSignin, appointmentCtrl.create);
router.route('/api/appointment').get(authCtrl.requireSignin, appointmentCtrl.list);

router.route('/api/appointment/:appointmentid')
    .get(authCtrl.requireSignin, authCtrl.hasAuthorization, appointmentCtrl.read)
    .put(authCtrl.requireSignin, authCtrl.hasAuthorization, appointmentCtrl.update)
    .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, appointmentCtrl.remove)

//router.route('/api/appointment').post(appointmentCtrl.create);
//router.route('/api/appointment').get(appointmentCtrl.list);
//router.route('/api/appointment/:appointmentid').get(appointmentCtrl.read);
//router.route('/api/appointment/:appointmentid').put(appointmentCtrl.update);
//router.route('/api/appointment/:appointmentid').delete(appointmentCtrl.remove);

router.param('appointmentid', appointmentCtrl.appointmentByID);
export default router
