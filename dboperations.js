var config = require('./dbconfig');
const sql = require('mssql');


async function getUsers() {
    try {
        let pool = await sql.connect(config);
        console.log('pooled')
        let products = await pool.request().query("SELECT * from users_info");
        console.log(products)
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getUser(user_id) {
    try {
        let pool = await sql.connect(config);
        let product = await pool.request()
            .input('input_parameter', sql.Int, orderId)
            .query("SELECT * from users_info where Id = @input_parameter");
        return product.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}


// async function addUser(user) {

//     try {
//         let pool = await sql.connect(config);
//         let insertProduct = await pool.request()
//             .input('Id', sql.Int, order.Id)
//             .input('Title', sql.NVarChar, order.Title)
//             .input('Quantity', sql.Int, order.Quantity)
//             .input('Message', sql.NVarChar, order.Message)
//             .input('City', sql.NVarChar, order.City)
//             .execute('InsertOrders');
//         return insertProduct.recordsets;
//     }
//     catch (err) {
//         console.log(err);
//     }

// }






module.exports = {
    getUsers: getUsers,
    getUser : getUser
}