function transform(line) {
    var values = line.split(',');
    var obj = new Object();
    obj.City = values[0];
    obj.State = values[1];
    obj.Country = values[2];
    obj.City_ID = values[3];

    var jsonString = JSON.stringify(obj);
    return jsonString;
}