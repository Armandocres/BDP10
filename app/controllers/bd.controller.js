const connection = require("../../config/connection");
const util = require("util");
const query = util.promisify(connection.query).bind(connection);

async function getbd(req, res) {
  try {
    let sql = `select * from ventas`;
    const rows = await query(sql);
    res.json(rows);
  } catch (error) {
    console.log(`${error}`);
  }
}

async function getOnebd(req, res) {
  const { id } = req.params;
  console.log(`el id es:  ${id}`);
  try {
    let sql = `SELECT * FROM provedores where id_provedor = ${connection.escape(id)}`
    const rows = await query(sql)
    res.json(rows);
  } catch (error) {
    console.log(`${error}`);
  }
}

async function addbd(req, res){
  const { id_provedor, Nombre_provedor, Telefono } = req.body
  try {
    let sql = `INSERT INTO provedores(id_provedor,Nombre_provedor,Telefono)
    VALUES(
    ${connection.escape(id_provedor)},
    ${connection.escape(Nombre_provedor)}, 
    ${connection.escape(Telefono)}
    )`
    const rows = await query(sql)
    res.json({
      message: 'se ha creado el provedor'
    })
  } catch (error) {
    console.log(`${error}`);
  }
}

async function editbd(req, res){
  const { id }= req.params;
  const { Nombre_provedor, Telefono } = req.body
  try {
    let sql = `update provedores set
    Nombre_provedor = ${connection.escape(Nombre_provedor)},
    Telefono = ${connection.escape(Telefono)} 
    where id_provedor = ${connection.escape(id)}`
    const rows = await query(sql)
    res.json({
      message: 'se ha editado el provedor'
    })
  } catch (error) {
    console.log(`${error}`);
  }
}

async function deletbd(req, res){
  const { id } = req.params
  try {
    let sql = `delete from provedores where id_provedor = ${connection.escape(id)}`
    const rows = await query(sql)
    res.json({
      message: 'se ha eliminado el provedor'
    })
  } catch (error) {
    console.log(`${error}`);
  }
} 

module.exports = {
  getbd,
  getOnebd,
  addbd,
  editbd,
  deletbd,
};
