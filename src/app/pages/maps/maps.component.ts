import { Component,OnInit } from '@angular/core';

declare var google: any;
declare var MarkerClusterer:any;

@Component({
    moduleId: module.id,
    selector: 'maps-cmp',
    templateUrl: 'maps.component.html'
})

export class MapsComponent implements OnInit {
    ngOnInit() {

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 7,
          center: {lat: 33.6844, lng: 73.0479}
        });

        // Create an array of alphabetical characters used to label the markers.
        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        // Add some markers to the map.
        // Note: The code uses the JavaScript Array.prototype.map() method to
        // create an array of markers based on a given "locations" array.
        // The map() method here has nothing to do with the Google Maps API.
        
        // Simple marker icon
        // var image='https://developers.google.com/maps/documentation/javascript/examples/full/images/map-icon-bank.png';
        // P marker icon
        // var image='https://developers.google.com/maps/documentation/javascript/examples/full/images/parking_lot_maps.png';
        // Coin marker icon
        var image="https://img.icons8.com/emoji/48/000000/coin-emoji.png";

        var markers = this.locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
            icon: image
          });
        });

        // Add a marker clusterer to manage the markers.
        
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      }
      
      locations = [
        // Islamabad
        {lat: 33.6844, lng: 73.0479},
        {lat: 33.7018, lng: 73.0228},
        {lat: 33.7155, lng: 73.1305},
        {lat: 33.7288, lng: 73.2450},
        // Rawalpindi
        {lat: 33.5969, lng: 73.0528},
        {lat: 33.5869, lng: 73.0428},
        {lat: 33.5769, lng: 73.0328},
        {lat: 33.5669, lng: 73.0428},
        // Lahore
        {lat: 31.5204, lng: 74.3587},
        {lat: 31.4204, lng: 74.2587},
        {lat: 31.2204, lng: 74.1587},
        
      ]

}

