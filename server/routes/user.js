import express from 'express';
const router = express.Router()

import { signin, signup } from '../controllers/user.js'

router.post("/signin", signin);
router.post("/signup", signup);

router.get('/', (req, res) => {
    res.send('hello world');
})

export default router