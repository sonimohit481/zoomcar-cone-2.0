let cardata = JSON.parse(localStorage.getItem("carsDetailsData"));

function displayCarData() {
  let card = document.createElement("div");
  card.setAttribute("class", "cardDiv");

  let nameImageDiv = document.createElement("div");
  nameImageDiv.setAttribute("class", "nameImageDiv");

  let nameDiv = document.createElement("div");
  nameDiv.setAttribute("class", "nameDiv");

  let name = document.createElement("p");
  name.innerText = cardata[0].carname;

  let transmission = document.createElement("p");
  transmission.innerText = cardata[0].transmission;

  let fuel = document.createElement("p");
  fuel.innerText = cardata[0].fueltype;

  nameDiv.append(name, transmission, fuel);

  let image = document.createElement("img");
  image.src = cardata[0].carimage;

  nameImageDiv.append(nameDiv, image);

  let iconDiv = document.createElement("div");
  iconDiv.setAttribute("class", "iconDiv");

  let pumpicon = document.createElement("img");
  pumpicon.src =
    "https://zoomcar-assets.zoomcar.com/images/original/ccedfb3dddda918d76ad27240ffa582f4a59a157.png?1584454852";

  let kmsavailable = document.createElement("p");
  kmsavailable.innerText = "Unlimited Kms without Fuel";

  iconDiv.append(pumpicon, kmsavailable);

  let ratingsDiv = document.createElement("div");
  ratingsDiv.setAttribute("class", "ratingsDiv");

  let starIcon = document.createElement("img");
  starIcon.src =
    "https://zoomcar-assets.zoomcar.com/images/original/b04593cd90f850d14ed46ed739b0371457ef6834.png?1633947533";

  let rating = document.createElement("p");
  rating.innerText = cardata[0].ratings;

  ratingsDiv.append(starIcon, rating);

  card.append(nameImageDiv, iconDiv, ratingsDiv);

  document.getElementById("detailcontainer").append(card);
}
displayCarData(cardata);

document.getElementById("price").innerText = "₹" + " " + cardata[0].rentprice;
