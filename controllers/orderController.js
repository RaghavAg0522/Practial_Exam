const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  const { products, totalAmount } = req.body;

  const order = await Order.create({
    userId: req.user.id,
    products,
    totalAmount
  });

  res.json(order);
};

exports.getMyOrders = async (req, res) => {
  const orders = await Order.find({ userId: req.user.id });
  res.json(orders);
};