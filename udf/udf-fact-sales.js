function transform(line) {
    var values = line.split(',');
    var obj = new Object();
    obj.Sales_ID = values[0];
    obj.Order_ID = values[1];
    obj.Customer_ID = values[2];
    obj.Product_ID = values[3];
    obj.City_ID = values[4];
    obj.Order_Date_ID = values[5];
    obj.Ship_Date_ID = values[6];
    obj.Ship_Mode = values[7];

    obj.Sales = parseFloat(values[8]); // convert to float
    obj.Quantity = parseInt(values[9]); // convert to integer
    obj.Discount = parseFloat(values[10]); // convert to float
    obj.Profit = parseFloat(values[11]); // convert to float

    var jsonString = JSON.stringify(obj);
    return jsonString;
}