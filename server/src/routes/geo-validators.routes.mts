import express from "express";
const router = express.Router();
import * as controllers from '../controllers/geo-validators.controllers.mjs';

router.get('/validatePostCode/:postCode', controllers.validatePostCode)
router.get('/cityArray/:state', controllers.cityArray);
router.get('/stateArray', controllers.stateArray);
router.get('/validateState/:state', controllers.validateState);
router.get('/validateCity/:state/:city', controllers.validateCity);
router.get('/zipCodeArray/:state/:city', controllers.zipCodeArray);

export { router }
