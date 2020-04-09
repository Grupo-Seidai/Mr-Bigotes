function formLimits() {
    // Get input element
    var input = document.getElementById("date");
    
    // Get today date
    var date = new Date();
    var day, month, year;

    // Input min date will be tomorrow
    date.setDate(date.getDate() + 1);
    day = "".concat(date.getDate());
    if(day.length < 2) {
        day = "0".concat(day);
    }
    month = "".concat(date.getMonth() + 1);
    if(month.length < 2) {
        month = "0".concat(month);
    }
    year = date.getFullYear();
    input.min = year+"-"+month+"-"+day;

    // Input max date will be in 2 months
    date.setDate(date.getDate() + 60);
    day = "".concat(date.getDate());
    if(day.length < 2) {
        day = "0".concat(day);
    }
    month = "".concat(date.getMonth() + 1);
    if(month.length < 2) {
        month = "0".concat(month);
    }
    year = date.getFullYear();
    input.max = year+"-"+month+"-"+day;
}
