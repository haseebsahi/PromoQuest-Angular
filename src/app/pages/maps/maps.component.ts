import { Component,OnInit, Injectable } from '@angular/core';
import { DataService } from '../../data.service';

declare var google: any;
declare var MarkerClusterer:any;
var markerArray = [];


@Component({
    moduleId: module.id,
    selector: 'maps-cmp',
    templateUrl: 'maps.component.html'
})

@Injectable()
export class MapsComponent implements OnInit {
  
  constructor(private _data:DataService) {
   }

  ngOnInit() {
    
  }

  // Form
  pname:string;
  pdes:string;
  plat:number;
  plong:number;
  
  saveval()
  {
    var ret;
    let promo={
      name:this.pname,
      description:this.pdes,
      latitude:this.plat,
      longitude:this.plong
    };

    this._data.doPOST(promo).subscribe(
      data => { ret = data},
      err => console.error(err),
      () => console.log('done loading Promos')
    );
      
    alert(this.pname + " Added! ");
      this.pname='';
      this.pdes='';
      // this.plat='';
      // this.plong='';
    }
  }

  // MAPS

  // In the following example, markers appear when the user clicks on the map.
  // Each marker is labeled with a single alphabetical character.
  var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var labelIndex = 0;

  var islamabad= { lat: 33.6844, lng: 73.0479 };

  function initAutocomplete() {
    var map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        center: islamabad,
        zoom: 13,
        mapTypeId: "roadmap"
      }
    );

    // Create the initial InfoWindow.
  var infoWindow = new google.maps.InfoWindow(
    {content: 'Click the map to get Lat/Lng!', position: islamabad});
  
    infoWindow.open(map);

  // Configure the click listener.
  map.addListener('click', function(mapsMouseEvent) {
    // Close the current InfoWindow.
    infoWindow.close();

    // Create a new InfoWindow.
    infoWindow = new google.maps.InfoWindow({position: mapsMouseEvent.latLng});
    infoWindow.setContent(mapsMouseEvent.latLng.toString());
    infoWindow.open(map); 
  });

  // This event listener calls addMarker() when the map is clicked.
  google.maps.event.addListener(map, 'rightclick', function(event) {
    addMarker(event.latLng, map);
  });

  // Add a marker at the center of the map.
  addMarker(islamabad, map);


  var image="https://img.icons8.com/emoji/48/000000/coin-emoji.png";

  // Adds a marker to the map.
  function addMarker(location, map) {
    // Add the marker at the clicked location, and add the next-available label
    // from the array of alphabetical characters.
    var marker = new google.maps.Marker({
      position: location,
      label: labels[labelIndex++ % labels.length],
      map: map,
      icon: image
    });

    markerArray.push(marker);

    // Add a marker clusterer to manage the markers.
          
    var markerCluster = new MarkerClusterer(map, markerArray,
      {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
  }
 

  // Create the search box and link it to the UI element.
  const input = document.getElementById("pac-input") as HTMLInputElement;
  const searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener("bounds_changed", () => {
    searchBox.setBounds(map.getBounds() as google.maps.LatLngBounds);
  });

  let markers: google.maps.Marker[] = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener("places_changed", () => {
    const places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(marker => {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    const bounds = new google.maps.LatLngBounds();
    places.forEach(place => {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      const icon = {
        url: place.icon as string,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(
        new google.maps.Marker({
          map,
          icon,
          title: place.name,
          position: place.geometry.location
        })
      );

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}

  
google.maps.event.addDomListener(window, 'load', initAutocomplete);
// google.maps.event.addDomListener(window, 'load', initialize);

