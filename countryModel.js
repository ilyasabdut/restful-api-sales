var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
  
  _id: {
    type: String,
    required: true,
  },
  Region: String,
  Country: String,
  ItemType: String,
  SalesChannel: String,
  OrderPriority: String,
  OrderDate: String,
  OrderID: String,
  ShipDate: String,
  UnitsSold: String,
  UnitPrice: String,
  UnitCost: String,
  TotalRevenue: String,
  TotalCost: String,
  TotalProfit: String,

});

var Sales = (module.exports = mongoose.model("Sales", userSchema));

module.exports.getByKeyword = function (callback,keyword) {
  console.log(keyword);
  Sales.find(
    {
      $or: [
        { _id: new RegExp(keyword, "i") },
        { Region: new RegExp(keyword, "i") },
        { Country: new RegExp(keyword, "i") },
        { ItemType: new RegExp(keyword, "i") },
        { SalesChannel: new RegExp(keyword, "i") },
        { OrderPriority: new RegExp(keyword, "i") },
        { OrderDate: new RegExp(keyword, "i") },
        { OrderID: new RegExp(keyword, "i") },
        { ShipDate: new RegExp(keyword, "i") },
        { UnitSold: new RegExp(keyword, "i") },
        { UnitPrice: new RegExp(keyword, "i") },
        { UnitCost: new RegExp(keyword, "i") },
        { TotalRevenue: new RegExp(keyword, "i") },
        { TotalCost: new RegExp(keyword, "i") },
        { TotalProfit: new RegExp(keyword, "i") },
      ],
    },
    callback
  );
};
