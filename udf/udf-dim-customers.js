function transform(line) {
    var values = line.split(',');
    var obj = new Object();
    obj.Customer_ID = values[0];
    obj.Customer_Name = values[1];
    obj.Segment = values[2];

    var jsonString = JSON.stringify(obj);
    return jsonString;
}