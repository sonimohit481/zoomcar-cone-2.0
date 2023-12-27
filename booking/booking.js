function openNav() {
  document.getElementById("side-navbar").style.width = "400px";

  document.getElementById("main").style.backgroundColor = "rgba(0,0,0,0.6)";
  document.getElementById("main").style.width = "100vw";
  document.getElementById("main").style.height = "100vh";
  document.getElementById("main").style.position = "fixed";
  document.getElementById("main").style.top = "0";
  document.getElementById("main").style.left = "0";

  document.getElementById("main").addEventListener("click", () => {
    closeNav();
  });
}

function closeNav() {
  document.getElementById("side-navbar").style.width = "0";
  document.getElementById("main").style.backgroundColor = "rgba(0,0,0,0)";
  document.getElementById("main").style.width = "0";

  document.getElementById("main").style.height = "0";
  document.getElementById("main").style.position = "none";
  document.getElementById("main").style.top = "0";
  document.getElementById("main").style.left = "0";
}

let carsDetails = [
  {
    carimage:
      "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800",

    carname: "Maruti Wagon R",
    transmission: "Automatic",
    fueltype: "petrol",
    seats: "5seats",
    cartype: "hatchback",
    deliverytype: "Home Delivery",
    ratings: "4.7 (66) 72,936 kms driven",
    delivery: "Home Delivery & pickup available",
    rentprice: 1601,
  },
  {
    carimage:
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mike-bird-170811.jpg&fm=jpg&_gl=1*x4q7yq*_ga*NTE3MTIwMjg0LjE2ODYyNDQwNzc.*_ga_8JE65Q40S6*MTcwMzY4OTg2Mi4xLjAuMTcwMzY4OTg2Mi4wLjAuMA..",

    carname: "Hyundai Santro",
    transmission: "Manual",
    fueltype: "petrol",
    seats: "5seats",
    cartype: "SUV",
    deliverytype: "Airport",
    ratings: "4.7 (66) 40,936 kms driven",
    delivery: "Home Delivery & pickup available",
    rentprice: 1497,
  },
  {
    carimage:
      "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800",

    carname: "Nissan Micra",
    transmission: "Manual",
    fueltype: "petrol",
    seats: "7seats",
    cartype: "SUV",
    deliverytype: "Home Delivery",
    ratings: "4.5 (69) 89,977 kms driven",
    delivery: "Home Delivery & pickup available",
    rentprice: 1775,
  },

  {
    carimage:
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mike-bird-170811.jpg&fm=jpg&_gl=1*x4q7yq*_ga*NTE3MTIwMjg0LjE2ODYyNDQwNzc.*_ga_8JE65Q40S6*MTcwMzY4OTg2Mi4xLjAuMTcwMzY4OTg2Mi4wLjAuMA..",

    carname: "Maruti S-Cross",
    transmission: "Automatic",
    fueltype: "petrol",
    seats: "7seats",
    cartype: "hatchback",
    deliverytype: "Airport",
    ratings: "5 (8) 26,057 kms driven",
    delivery: "Home Delivery & pickup available",
    rentprice: 2700,
  },
  {
    carimage:
      "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800",

    carname: "Maruti Swift",
    transmission: "Manual",
    fueltype: "petrol",
    seats: "5seats",
    cartype: "hatchback",
    deliverytype: "Airport",
    ratings: "4.5 (11) 34,245 kms driven",
    delivery: "Home Delivery & pickup available",
    rentprice: 1757,
  },
  {
    carimage:
      "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800",

    carname: "Hyundai I20",
    transmission: "Manual",
    fueltype: "petrol",
    seats: "5seats",
    cartype: "hatchback",
    deliverytype: "Home Delivery",
    ratings: "4.9 (18) 12,679 kms driven",
    delivery: "Home Delivery & pickup available",
    rentprice: 2700,
  },

  {
    carimage:
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mike-bird-170811.jpg&fm=jpg&_gl=1*x4q7yq*_ga*NTE3MTIwMjg0LjE2ODYyNDQwNzc.*_ga_8JE65Q40S6*MTcwMzY4OTg2Mi4xLjAuMTcwMzY4OTg2Mi4wLjAuMA..",

    carname: "Toyota Etios",
    transmission: "Manual",
    fueltype: "Diesel",
    seats: "5seats",
    cartype: "SUV",
    deliverytype: "Home Delivery",
    ratings: "4.7 (32) 70,450 kms driven",
    delivery: "Home Delivery & pickup available",
    rentprice: 1625,
  },

  {
    carimage:
      "https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=800",
    carname: "Renault Triber",
    transmission: "Manual",
    fueltype: "Diesel",
    seats: "7seats",
    cartype: "SUV",
    deliverytype: "Home Delivery",
    ratings: "4.3 (8) 12,525 kms driven",
    delivery: "Home Delivery & pickup available",
    rentprice: 1672,
  },

  {
    carimage:
      "https://images.pexels.com/photos/253096/pexels-photo-253096.jpeg?auto=compress&cs=tinysrgb&w=800",

    carname: "Tata Nexon",
    transmission: "Automatic",
    fueltype: "Diesel",
    seats: "5seats",
    cartype: "hatchback",
    deliverytype: "Airport",
    ratings: "5 (40) 60,437kms driven",
    delivery: "Home Delivery & pickup available",
    rentprice: 1672,
  },
  {
    carimage:
      "https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=800",

    carname: "Maruti",
    transmission: "Automatic",
    fueltype: "Diesel",
    seats: "5seats",
    cartype: "hatchback",
    deliverytype: "Airport",
    ratings: "5 (40) 60,437kms driven",
    delivery: "Home Delivery & pickup available",
    rentprice: 1672,
  },
  {
    carimage:
      "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800",
    carname: "Datsun Go Plus",
    transmission: "Manual",
    fueltype: "petrol",
    seats: "7seats",
    cartype: "SUV",
    deliverytype: "Airport",
    ratings: "4.6 (18) · 22,485 kms driven",
    delivery: "Home Delivery & pickup available",
    rentprice: "877",
  },
  {
    carimage:
      "https://images.pexels.com/photos/261986/pexels-photo-261986.jpeg?auto=compress&cs=tinysrgb&w=800",
    carname: "Tata Tiago",
    transmission: "Manual",
    fueltype: "petrol",
    seats: "5seats",
    cartype: "hatchback",
    deliverytype: "Airport",
    ratings: "4.6 (20) · 30,021 kms driven",
    delivery: "Home Delivery & pickup available",
    rentprice: "786",
  },
  {
    carimage:
      "https://images.pexels.com/photos/261986/pexels-photo-261986.jpeg?auto=compress&cs=tinysrgb&w=800",
    carname: "Renault Kiger",
    transmission: "Manual",
    fueltype: "petrol",
    seats: "5seats",
    cartype: "SUV",
    deliverytype: "Airport",
    ratings: "4.0 · 13,639 kms driven",
    delivery: "Home Delivery & pickup available",
    rentprice: "1198",
  },
  {
    carimage:
      "https://images.pexels.com/photos/253096/pexels-photo-253096.jpeg?auto=compress&cs=tinysrgb&w=800",
    carname: "Maruti Suzuki XL6 Petrol",
    transmission: "Manual",
    fueltype: "petrol",
    seats: "7seats",
    cartype: "SUV",
    deliverytype: "Airport",
    ratings: "4.9 (23) · 22,009 kms driven",
    delivery: "Home Delivery & pickup available",
    rentprice: "1410",
  },
  {
    carimage:
      "https://images.pexels.com/photos/253096/pexels-photo-253096.jpeg?auto=compress&cs=tinysrgb&w=800",
    carname: "Maruti Ciaz",
    transmission: "Manual",
    fueltype: "petrol",
    seats: "5seats",
    cartype: "Sedan",
    deliverytype: "Airport",
    ratings: "5.0 (13) · 51,328 kms driven",
    delivery: "Home Delivery & pickup available",
    rentprice: "1106",
  },
  {
    carimage:
      "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800",
    carname: "Honda Amaze 1.2V",
    transmission: "Manual",
    fueltype: "petrol",
    seats: "5seats",
    cartype: "Sedan",
    deliverytype: "Airport",
    ratings: "4.7 (26) · 37,185 kms driven",
    delivery: "Home Delivery & pickup available",
    rentprice: "924",
  },
  {
    carimage:
      "https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=800",
    carname: "Hyundai Verna",
    transmission: "Manual",
    fueltype: "petrol",
    seats: "5seats",
    cartype: "Sedan",
    deliverytype: "Airport",
    ratings: "4.9 (75) · 73,417 kms driven",
    delivery: "Home Delivery & pickup available",
    rentprice: "1362",
  },
  {
    carimage:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800",
    carname: "Hyundai Xcent",
    transmission: "Manual",
    fueltype: "petrol",
    seats: "5seats",
    cartype: "Sedan",
    deliverytype: "Airport",
    ratings: "4.8 (35) · 78,200 kms driven",
    delivery: "Home Delivery & pickup available",
    rentprice: "806",
  },
  {
    carimage:
      "https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=800",
    carname: "Mahindra XUV 500 AT",
    transmission: "Automatic",
    fueltype: "diesel",
    seats: "7seats",
    cartype: "Sedan",
    deliverytype: "Airport",
    ratings: "4.0 · 19,351 kms driven",
    delivery: "Home Delivery & pickup available",
    rentprice: "2353",
  },
  {
    carimage:
      "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800",
    carname: "Maruti Suzuki XL6 Petrol",
    transmission: "Manual",
    fueltype: "petrol",
    seats: "5seats",
    cartype: "Sedan",
    deliverytype: "Airport",
    ratings: "4.8 (12) · 15,688 kms driven",
    delivery: "Home Delivery & pickup available",
    rentprice: "1182",
  },
];

function displayData(carsDetails) {
  document.getElementById("cars-box").innerHTML = "";
  carsDetails.forEach((car, index) => {
    if (index > 3) {
      return;
    }
    let card = document.createElement("div");

    let imageDiv = document.createElement("div");

    let carImage = document.createElement("img");
    carImage.src = car.carimage;
    imageDiv.append(carImage);
    carImage.setAttribute("class", "carimage");

    let detailsDiv = document.createElement("div");

    let carname = document.createElement("p");
    carname.innerText = car.carname;
    carname.setAttribute("class", "carname");

    let seatsFuelTransmission = document.createElement("div");

    let transmission = document.createElement("p");
    transmission.innerText = car.transmission;

    let fueltype = document.createElement("p");
    fueltype.innerText = car.fueltype;

    let seats = document.createElement("p");
    seats.innerText = car.seats;

    seatsFuelTransmission.append(transmission, fueltype, seats);
    seatsFuelTransmission.setAttribute("class", "seatsFuelTransmission");

    let ratings = document.createElement("p");
    ratings.innerText = car.ratings;
    ratings.setAttribute("class", "ratings");

    let delivery = document.createElement("p");
    delivery.innerText = car.delivery;
    delivery.setAttribute("class", "delivery");

    detailsDiv.append(carname, seatsFuelTransmission, ratings, delivery);
    detailsDiv.setAttribute("Class", "detailsDiv");

    let priceDiv = document.createElement("div");

    let price = document.createElement("p");
    price.innerText = "₹" + "" + car.rentprice;
    price.setAttribute("class", "price");

    let bookBtn = document.createElement("button");
    bookBtn.innerText = "BOOK NOW";
    bookBtn.setAttribute("class", "bookBtn");

    bookBtn.addEventListener("click", () => {
      window.location.href = "checkout.html";
      let carDetails = [];
      carDetails.push(car);
      localStorage.setItem("carsDetailsData", JSON.stringify(carDetails));
    });

    priceDiv.append(price, bookBtn);

    card.append(imageDiv, detailsDiv, priceDiv);

    document.getElementById("cars-box").append(card);
  });
}

displayData(carsDetails);

// filters for each type

// filter for 5 seats
function filterFor5(carsDetails) {
  let filteredData = carsDetails.filter((cars) => {
    if (cars.seats == "5seats") {
      return true;
    } else {
      return false;
    }
  });
  return filteredData;
}

document.getElementById("filter5").addEventListener("click", function () {
  let data = filterFor5(carsDetails);
  displayData(data);
});

// filter for 7 seats
function filterFor7(carsDetails) {
  let filteredData = carsDetails.filter((cars) => {
    if (cars.seats == "7seats") {
      return true;
    } else {
      return false;
    }
  });
  return filteredData;
}

document.getElementById("filter7").addEventListener("click", function () {
  let data = filterFor7(carsDetails);
  displayData(data);
});

// filter for manual tranmission
function filterForManual(carsDetails) {
  let filteredData = carsDetails.filter((cars) => {
    if (cars.transmission == "Manual") {
      return true;
    } else {
      return false;
    }
  });
  return filteredData;
}

document.getElementById("filtermanual").addEventListener("click", function () {
  let data = filterForManual(carsDetails);
  displayData(data);
});
//  filter for automatic transmission
function filterForAutomatic(carsDetails) {
  let filteredData = carsDetails.filter((cars) => {
    if (cars.transmission == "Automatic") {
      return true;
    } else {
      return false;
    }
  });
  return filteredData;
}

document
  .getElementById("filterautomatic")
  .addEventListener("click", function () {
    let data = filterForAutomatic(carsDetails);
    displayData(data);
  });
// filter for suv type
function filterForSuv(carsDetails) {
  let filteredData = carsDetails.filter((cars) => {
    if (cars.cartype == "SUV") {
      return true;
    } else {
      return false;
    }
  });
  return filteredData;
}

document.getElementById("filtersuv").addEventListener("click", function () {
  let data = filterForSuv(carsDetails);
  displayData(data);
});

// filter for hatchback type

function filterForHatchback(carsDetails) {
  let filteredData = carsDetails.filter((cars) => {
    if (cars.cartype == "hatchback") {
      return true;
    } else {
      return false;
    }
  });
  return filteredData;
}

document
  .getElementById("filterhatchback")
  .addEventListener("click", function () {
    let data = filterForHatchback(carsDetails);
    displayData(data);
  });

// filter for home delivery

function filterForHomeDelivery(carsDetails) {
  let filteredData = carsDetails.filter((cars) => {
    if (cars.deliverytype == "Home Delivery") {
      return true;
    } else {
      return false;
    }
  });
  return filteredData;
}

document.getElementById("filterhome").addEventListener("click", function () {
  let data = filterForHomeDelivery(carsDetails);
  displayData(data);
});

// filter for airport delivery

function filterForAirport(carsDetails) {
  let filteredData = carsDetails.filter((cars) => {
    if (cars.deliverytype == "Airport") {
      return true;
    } else {
      return false;
    }
  });
  return filteredData;
}

document.getElementById("filterairport").addEventListener("click", function () {
  let data = filterForAirport(carsDetails);
  displayData(data);
});

document.querySelector(".bookBtn").addEventListener("click", () => {
  window.location.href = "checkout.html";
});
