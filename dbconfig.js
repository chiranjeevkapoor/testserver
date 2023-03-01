// const config  = {
//     user:'sa',
//     password:"password",
//     server:"SISLLAP0208\SQLEXPRESS",
//     database:"Users_db",
//     authentication:{
//         type:'default',
//         options:{
//             username: 'sa',
//             password: 'password',
//         }
//     },
//     options:{
//         port: 49917,
//         database: 'Users_db',
//         trustedconnection:true,
//         // enableArithAort:true,
//         instancename:'SQLEXPRESS'
//     }

// }

// module.exports = config;

const config = {
    user :'sa',
    password :'password',
    server:'SISLLAP0208\SQLEXPRESS',
    database:'Users_db',
    options:{
        trustedconnection: true,
        enableArithAbort : true, 
        instancename :'SQLEXPRESS'
    },
    port : 1433
}

// const config = {
//     user: 'sa',
//     password: 'password',
//     server: 'SISLLAP0208\SQLEXPRESS', 
//     database: 'Users_db',
//     port:1433
// }

module.exports = config; 