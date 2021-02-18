const Sequalize = require("sequelize");

const sequalize = new Sequalize("onlineshop", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

sequalize.sync();
module.exports = sequalize;
