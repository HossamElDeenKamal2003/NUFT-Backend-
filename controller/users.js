const { Signup } = require('../models/users'); 

const signUp = async function(req, res) {
    const { email, password } = req.body;
    try {
        const new_user = new Signup({ email, password });
        await new_user.save();
        res.status(200).json({ message: 'User created successfully', user: new_user });
    } catch (error) {
        res.status(500).json({
            message: 'Error creating user',
            error: error.message
        });
    }
}

const signIn = async function(req, res) {
    const { email, password } = req.body;
    try {
        const user = await Signup.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        res.status(200).json({ message: 'Login successfully' });
    } catch (error) {
        res.status(500).json({
            message: 'Error with login',
            error: error.message
        });
    }
}

const getAllUsers = async function(req,res){
    try{
        const users = await Signup.find();
        if(users.length === 0){
            res.status(404).json({message:'No users found'});
        }
        res.status(200).json(users);
    }catch(error){
        console.log(error);
        res.status(500).jsom({message: 'INTERNAL SERVER ERROR'});
    }
}

module.exports = { signUp, signIn, getAllUsers };
