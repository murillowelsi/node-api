'use strict';

const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

// exports.get = async() => {
//   const res = await Product.find({
//     active: true
//   }, 'title price slug');
//   return res;
// };

exports.create = async(data) => {
  let customer = new Customer(data);
  await customer.save();
};
