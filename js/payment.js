let selectSeanse = JSON.parse(sessionStorage.selectSeanse);
let placesArray = selectSeanse.salesPlaces.map(salePlace => `${salePlace.row}/${salePlace.place}`);
let price = selectSeanse.salesPlaces.reduce((acc, salePlace) => {
  if (salePlace.type === "standart") {
    return acc + Number(selectSeanse.priceStandart);
  } else {
    return acc + Number(selectSeanse.priceVip);
  }
}, 0);

let places = placesArray.join(", ");

document.querySelector(".ticket__title").innerHTML = selectSeanse.filmName;
document.querySelector(".ticket__chairs").innerHTML = places;
document.querySelector(".ticket__hall").innerHTML = selectSeanse.hallName;
document.querySelector(".ticket__start").innerHTML = selectSeanse.seanceTime;
document.querySelector(".ticket__cost").innerHTML = price;

let newHallConfig = selectSeanse.hallConfig.replace(/selected/g, "taken");
console.log(newHallConfig);

const acceptinButton = document.getElementById("acceptin-button");

acceptinButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  let request = `event=sale_add&timestamp=${selectSeanse.seanceTimeStamp}&hallId=${selectSeanse.hallId}&seanceId=${selectSeanse.seanceId}&hallConfiguration=${newHallConfig}`;                  
  
  getRequest(request, function() {
    window.location.href = 'ticket.html';
  });
});
