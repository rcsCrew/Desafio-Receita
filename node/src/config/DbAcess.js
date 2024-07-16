module.exports = {
  HOST: "",
  USER: "",
  PASSWORD: "",
  DB: "",
  dialect: "mysql",
  port: ,
  dialectOptions: {
    ssl: {
      require: ,
      rejectUnauthorized: false 
    }
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
