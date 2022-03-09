import {Sequelize} from "sequelize";
import db from "../Back-End/Database.js";

const {DataTypes} = Sequelize;

const Product = db.define('message', {
    name:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    subject:{
        type: DataTypes.STRING
    },
    message:{
        type: DataTypes.STRING
    },
},{
    freezeTableName: true
});

export default Product