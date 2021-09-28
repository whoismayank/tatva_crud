const express = require('express');
const user = require('./routes/users');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.get('/', async (req, res) => {
    try {
        await res.status(200).json({status: 'success',message:'App is working now!'});
    } catch (error) {
        await res.status(500).json({status: 'success',message:'Something wen wrong!'});
    }
})
app.use('/users', user);
const conn = require('./models');
conn.sequelize.sync();
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
})