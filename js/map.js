
function add_child_markers(children, map) {
    $.each(children, function(i, child) {
        var c = new google.maps.Marker({
          position: child.location,
          map: map,
          label: child.name,
          title: child.name
        });
    });
}

function add_your_location_marker(loc, map) {
    var iconWidth = 256;
    var iconHeight = 256;
    var scale = .2;

    var youIcon = new google.maps.MarkerImage(
          '../images/youIcon.png', //url
          new google.maps.Size(iconWidth*scale, iconHeight*scale), //size
          new google.maps.Point(0,0), //origin
          new google.maps.Point((iconWidth/2)*scale, iconHeight*scale), //anchor
          new google.maps.Size(iconWidth*scale,iconHeight*scale)
    );

    var marker = new google.maps.Marker({
      position: loc,
      map: map,
      title: 'You are here.',
      icon: youIcon
    });
}

function draw_location(loc, map) {
    var location = new google.maps.Polygon({
      paths: loc.points,
      strokeColor: '#0000FF',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#0000FF',
      fillOpacity: 0.15
    });
    location.setMap(map);
}

function edit_location(loc, map) {
    var location = new google.maps.Polygon({
      paths: loc.points,
      strokeColor: '#0000FF',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#0000FF',
      fillOpacity: 0.15,
      editable: true
    });
    location.setMap(map);
}

function clearMapCache() {
    console.log('clearing cache');
    $.session.remove('map_origin');
    $.session.remove('map_zoom');
    $.session.remove('map_location');
}

function goStraightToMap() {
    $.session.set('last_page', "home.html", null, null);
    window.location='map.html';
    document.location.href = "map.html";
}

function goToMap(child_id, lastPage) {
    $.session.set('last_page', lastPage, null, null);
    if (typeof child_id !== 'undefined') {
        $.session.set('map_origin', getChildLocation(child_id));
        $.session.set('map_zoom', 18);
    }
    else {
        $.session.set('map_origin', getYourLocation());
    }
    window.location='map.html';
}

function goBack() {
    var page = $.session.get("last_page");
    document.location.href = page;
}

function goToLocation(loc_id) {
    location = getLocationById(loc_id);
    console.log('going to location', location);
    $.session.set('map_origin', location.center);
    $.session.set('map_zoom', location.zoom);
    $.session.set('map_location', loc_id);
    window.location='display-location.html';
}

function editLocation(loc_id) {
    location = getLocationById(loc_id);
    console.log('going to location', location);
    $.session.set('map_origin', location.center);
    $.session.set('map_zoom', location.zoom);
    $.session.set('map_location', loc_id);
    window.location='edit-location.html';
}

function getOrigin() {
    console.log('getting origin');
    loc = $.session.get('map_origin');
    return typeof loc !== 'undefined' ? loc : getYourLocation();
}

function getZoom() {
    var defaultZoom = 16;
    var zoom = $.session.get('map_zoom');
    return typeof zoom !== 'undefined' ? zoom : defaultZoom;
}

function getCurrentLocation() {
    loc = $.session.get('map_location');
    return typeof loc !== 'undefined' ? loc : -1;
}
