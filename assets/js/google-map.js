let map;


function initMap() {
    let uluru = {lat: 34.266698945483796, lng: -116.78164050284762 };
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: uluru,
        mapTypeId: 'satellite',
        labels : true
    });
    
let tourStops = [
    [{ lat: 34.266698945483796, lng: -116.78164050284762 }, "Bear Family Ranch" , './assets/images/booking/1.jpg'], 
    [{ lat: 34.24366200619288, lng: -116.79022858750275 }, "Goldies Getaway" , './assets/images/booking/2.jpg'], 
    [{ lat: 34.25677186278847, lng: -116.74842146052082 }, "Big Bear" ,'./assets/images/booking/3.jpg'],
    [{ lat: 34.29859956135717, lng: -116.79546444517389  }, "Lucerne Valley" ,'./assets/images/booking/4.jpg'],
    [{ lat: 34.80875219056349,  lng: -116.6823772367548  }, "Rattlesnake Canyon" ,'./assets/images/booking/5.jpg'],
];  

tourStops.forEach(function (_a, i) {

    let contentString = `<div class="map-card" style="width:310px; height: 468px;">
    <div class="map-card-heading">
      <p class="m-0">${_a[1]}</p>
    </div>
    <div class="row mb-2 w-100">
      <div class="col-6">
        <div class="card-img position-relative">
        <a href="#" class="favorites position-absolute top-0 " ><i class="fa-regular fa-heart"></i></a>
          <img src=${_a[2]} style="width:100%; height:auto;" alt="card-image" />
          <p>Hot Tub</p>
        </div>
      </div>
      <div class="col-6">
        <div class="map-card-btn">
          <a href="./detail-page.html" class="btn btn-search mb-2">View Detail</a>
          <a href="./detail-page.html" class="btn btn-search">Get Directions</a>
        </div>
        <div class="features">
          <p class="m-0">3 Bedrooms</p>
          <p class="m-0">2 Baths</p>
          <p class="m-0">Price: $221</p>
        </div>
      </div>
    </div>
    <div class="booking-btn">
      <a href="./booking-form.html" class="btn btn-search">Book Now</a>
    </div>
    <div class="item-list"><h3>Available Package Components</h3><ul class="amenities"><li class="item">Saturday Oktoberfest Entry</li>
        <li class="item">Sunday Oktoberfest Entry</li>
        <li class="item">Cozy Night Firewood Package</li>
        <li class="item">Food Stock</li>
        <li class="item">Large Firewood </li>
        <li class="item">Flowers - Mixed Arrangements</li>
        <li class="item">Breakfast Package</li>
        <li class="item">A Dozen Roses</li>
        <li class="item">Fresh Fruit Basket</li>
        </ul>
    </div>
    <div class="addon-buttons"><a href="./booking-packages.html" class="select-package">Select Package Components »</a><br><a href="./booking-form.html" class="book-lodging-only">Book Lodging Only »</a></div>
  </div>`;

    let infowindow = new google.maps.InfoWindow({
        content: contentString,
    });
    
    let marker = new google.maps.Marker({
        position: _a[0],
        map: map,
        title: "Uluru (Ayers Rock)",
    });
    marker.addListener("click", function () {
        infowindow.open({
            anchor: marker,
            map: map,
            shouldFocus: false,
        });
    });})
};
window.initMap = initMap;

