module.exports = {
  HOST: "localhost",
  USER: "",
  PASSWORD: "",
  DB: "",
  dialect: "mysql",
  port: 17273,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
