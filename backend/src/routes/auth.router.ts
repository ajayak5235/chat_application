import express,{Request,Response, RequestHandler} from 'express'
import {signup,login,updateProfile, checkAuth, getProfile} from '../controllers/auth.controller';
import { authmiddleware } from '../middleware/middlewares';
export const router = express.Router();

router.post("/signup", (req, res) => { 
    signup(req,res);
});
router.post("/login", (req, res) => {
    login(req,res);
});
router.put("/update-profile", authmiddleware as RequestHandler,(req,res)=>{
    updateProfile(req,res);
})
router.get("/check", authmiddleware as RequestHandler,(req,res)=>{
    checkAuth(req,res);
});
router.get("/profile", authmiddleware as RequestHandler, (req,res) => {
    getProfile(req,res);
});

