const express=require('express');

const router=express.Router();

const appController=require('../controller/appController');
const isAuthenticated=require('../middleware/isAuthenticated');

router.get('/',isAuthenticated,appController.homeController);

router.get('/applications',isAuthenticated,appController.applicationController);

router.get('/approvals',isAuthenticated,appController.approvalController);

router.get('/requests',isAuthenticated,appController.requestController);

router.get('/logout',isAuthenticated,appController.logoutController);

router.get('/hell',appController.sendCookies);

module.exports=router;