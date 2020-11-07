const app = require('./app/app');
//database
require('./config/connection');

app.listen(app.get('port'), (error) =>{
  if(error){
    console.log(`hay un error ${error}`)
  }else {
    console.log(`server corriendo en ${app.get('port')}`)
  }
})