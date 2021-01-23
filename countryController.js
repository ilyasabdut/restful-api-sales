Sales = require("./countryModel");

exports.index = function (req, res) {
  keyword = req.query.keyword;
  if (keyword !== "") {
    Sales.getByKeyword(function (err, sales) {
      if (err) {
        return res.json({
          status: "error",
          message: err,
        });
      }
      res.json({
        status: "success",
        message: "Sales retrieved successfully",
        data: sales,
      });
    },keyword);
  }
};

exports.view = function (req, res) {
  Sales.findById(req.params.sales_id, function (err, sales) {
    if (err) res.send(err);
    return res.json({
      message: "Sales details loading..",
      data: sales,
    });
  });
};
