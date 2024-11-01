function transform(line) {
    var values = line.split(',');
    var obj = new Object();
    obj.Date = values[0];
    obj.Month = parseInt(values[1]);
    obj.Quarter = parseInt(values[2]);
    obj.Year = parseInt(values[3]);
    obj.Date_ID = values[4];

    var jsonString = JSON.stringify(obj);
    return jsonString;
}