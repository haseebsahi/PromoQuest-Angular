import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

// declare var getContext: any;
// declare var google: any;
// declare var MarkerClusterer:any;
// var markerArray = [];

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{

  // public promos;
  
  constructor(private _data:DataService){}

  ngOnInit(){
    // this.getpromo();
  }

  


//   getpromo(){
//     this._data.doGET().subscribe(
//         data => { this.promos = data},
//         // lat => {this.promos.latitude = lat},
//         // long => {this.promos.longitude = long}
//         err => console.error(err),
//         () => console.log('done loading Promos')
        
//     );
//   }

  

// } 

// var map=google.maps.Map;
//   // addMarker(coords, map);

//   var image="https://img.icons8.com/emoji/48/000000/coin-emoji.png";
//   function addMarker(location, map) {
//     // Add the marker at the clicked location, and add the next-available label
//     // from the array of alphabetical characters.
//     var marker = new google.maps.Marker({
//       position: location,
//       map: map,
//       icon: image
//     });}

// $.controller('MapCtrl', function($state, $scope, LocFac) {  
//   var Markers =  LocFac.getLocations().then(function(data) { 
//      return data.data; 
//   }); 

//   $scope.map = { 
//      center: { latitude: 14.8282, longitude: 122.5795 }, 
//      zoom: 1 
//   };

//   $scope.markers = Markers;

// })

  // MAPS

  // In the following example, markers appear when the user clicks on the map.
  // Each marker is labeled with a single alphabetical character.
//   var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   var labelIndex = 0;

//   function initialize() {
//     var islamabad = { lat:33.6844, lng: 73.0479 };
//     var map = new google.maps.Map(document.getElementById('map'), {
//       zoom: 12,
//       center: islamabad
//     });

//   // Add a marker at the center of the map.
//     addMarker(islamabad, map);

  

//   var image="https://img.icons8.com/emoji/48/000000/coin-emoji.png";

//     function addMarker(location, map) {
//       // Add the marker at the clicked location, and add the next-available label
//       // from the array of alphabetical characters.
//       var marker = new google.maps.Marker({
//         position: location,
//         label: labels[labelIndex++ % labels.length],
//         map: map,
//         icon: image
//       });
//       var markerCluster = new MarkerClusterer(map, markerArray,
//         {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
    
//   }
// }

// google.maps.event.addDomListener(window, 'load', initialize);
}

var locations: any;

locations = [
  ['Bondi Beach', -33.890542, 151.274856, 4],
  ['Coogee Beach', -33.923036, 151.259052, 5],
  ['Cronulla Beach', -34.028249, 151.157507, 3],
  ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
  ['Maroubra Beach', -33.950198, 151.259302, 1]
];

function init(){
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: new google.maps.LatLng(-33.92, 151.25),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });


var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < locations.length; i++) { 
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    map: map
  });

  google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      infowindow.setContent(locations[i][0]);
      infowindow.open(map, marker);
    }
  })(marker, i));
}
}

google.maps.event.addDomListener(window, 'load', init);