const db = require('../models');
const users = db.users;
exports.create = async (data) => {
    try {
        return new Promise((resolve, reject) => {
            return resolve(data);
        })
    } catch (error) {
        await res.status(500).json({status: 'success',message:error});
    }
}