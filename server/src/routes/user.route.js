import express from 'express';
import userController from '../controllers/user.controller.js';
import path from 'path'
import { User } from '../models/User.js';


const UserRoute = express.Router();

UserRoute.post('/', userController.create)
UserRoute.get('/', (req, res) => res.sendFile(path.resolve('./index.html')))
UserRoute.get('/users', userController.findAll)


export default UserRoute