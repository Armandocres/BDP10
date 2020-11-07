const mysql = require ('mysql')
  data = require('./datosProvados.json'),
  objectConnection = {
    host: data.mysql.host,
    port: data.mysql.port,
    user: data.mysql.user,
    password: data.mysql.password,
    database: data.mysql.database
  }

  const myConn = mysql.createConnection(objectConnection)
  myConn.connect((err) =>{
    if(err){
      console.log(`hay un problema ${err}`);
    }else{
      console.log('base de datos conectada');
    }
  })
 
module.exports = myConn