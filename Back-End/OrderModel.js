import {Sequelize} from "sequelize";
import db from "../Back-End/Database.js";

const {DataTypes} = Sequelize;

const Product = db.define('order', {
    name:{
        type: DataTypes.STRING
    },
    price:{
        type: DataTypes.DOUBLE
    },
    qty:{
        type: DataTypes.INTEGER
    }
},{
    freezeTableName: true
});

export default Product