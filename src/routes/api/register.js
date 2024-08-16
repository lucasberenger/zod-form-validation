import express from 'express';
import { z } from 'zod';


const router = express.Router();


router.post('/register', (req, res) => {
    const schema = z.object({
        firstName: z.string(),
        lastName: z.string(),
        age: z.number().min(18),
        email: z.string().email()
    });

    const result = schema.safeParse(req.body);

    if(!result.success) {
        return res.status(404).json(result.error.errors);
    }

    console.log("Register: " + result.data.firstName)

    res.json({
        message: "User has been registered successfully!",
        data: result.data,
    })
})



export default router;