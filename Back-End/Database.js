import {Sequelize} from 'sequelize';

const db = new Sequelize('Pizza_Web', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db