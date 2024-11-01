function transform(line) {
    var values = line.split(',');
    var obj = new Object();
    obj.Product_ID = values[0];
    obj.Product_Name = values[1];
    obj.Category = values[2];
    obj.Sub_Category = values[3];
    obj.Price_Per_Unit = parseFloat(values[4]);

    var jsonString = JSON.stringify(obj);
    return jsonString;
}

