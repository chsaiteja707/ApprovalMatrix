const express=require('express');

const router=express.Router();

const appController=require('../controller/appController');

router.get('/',appController.homeController);

router.get('/applications',appController.applicationController);

router.get('/approvals',appController.approvalController);

router.get('/requests',appController.requestController);

module.exports=router;