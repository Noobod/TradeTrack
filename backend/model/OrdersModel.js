const {model} = require("mongoose");

const {OrdersSchema} = require('../schemas/OrdersSchema');

const OredersModel = new model("order", OrdersSchema);

module.exports = {OredersModel};