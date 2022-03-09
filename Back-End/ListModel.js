import {Sequelize} from "sequelize";
import db from "../Back-End/Database.js";

const {DataTypes} = Sequelize;

const Product = db.define('listproduct', {
    name:{
        type: DataTypes.STRING
    },
    price:{
        type: DataTypes.DOUBLE
    },
    qty:{
        type: DataTypes.INTEGER
    },
    image:{
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.STRING
    },
    button:{
        type: DataTypes.STRING
    },
    alt:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});

export default Product