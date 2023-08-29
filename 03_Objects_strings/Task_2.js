let car = {
    name: "Ford",
    model: "Focus",
    year: 2003,
    averageSpeed: 100 
};

function displayCarInfo(car) {
    console.log("Manufacturer:", car.name);
    console.log("Model:", car.model);
    console.log("Year:", car.year);
    console.log("Average Speed:", car.averageSpeed, "km/h");
}

function calcTravelTime(distance) {
    var travelTime = distance / car.averageSpeed; 
    var breaks = Math.floor(travelTime / 4); 
    travelTime += breaks;
    var hours = Math.floor(travelTime);
    var minutes = Math.round((travelTime - hours) * 60);
    console.log("Distance:", distance, "km");
    console.log("Time:", hours, "hours", minutes, "minutes");
}

displayCarInfo(car);
calcTravelTime(433);