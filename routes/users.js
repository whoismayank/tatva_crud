const { check, validationResult } = require('express-validator');
const router = require('express').Router();
const users = require('../controllers/users');
router.post('/create',
    check('password')
    .isLength({ min: 5 })
    .withMessage('Password must be at least 5 chars long'),
    check('first_name').notEmpty().withMessage('First Name can not be blank'),
    check('last_name').notEmpty().withMessage('Last Name can not be blank'),
    check('email').isEmail().withMessage('Invalid email address'),
    async function(req, res){
    const errors = validationResult(req);
    console.log(errors);
    if(!errors.isEmpty()) {
        res.status(400).json({errors: errors.array()});
    } else {
        try {
            const result = await users.create(req.body);
            await res.status(200).json({status: 'success',message:result});

        } catch (error) {
            await res.status(500).json({status: 'success',message:'Something wen wrong!'});
        }
    }
    // try {

    //     await res.status(200).json({status: 'success',message:'This is user route'});
    // } catch (error) {
    //     await res.status(500).json({status: 'success',message:'Something wen wrong!'});
    // }
})

// router.post('/create', users.create);


module.exports = router;