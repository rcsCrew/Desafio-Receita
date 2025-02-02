module.exports = {
  HOST: "",
  USER: "",
  PASSWORD: "",
  DB: "",
  dialect: "mysql",
  port: 17273,
  dialectOptions: {
    ssl: {
      require: true,
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
