const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderId: { type: String },
  orderName: { type: String },
});

exports.Order =mongoose.model("orderData", orderSchema)