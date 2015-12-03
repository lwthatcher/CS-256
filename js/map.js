
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

function goToMap(child_id) {
    if (typeof child_id !== 'undefined') {
        $.session.set('map_origin', getChildLocation(child_id));
    }
    else {
        $.session.set('map_origin', getYourLocation());
    }
    window.location='map.html';
}

function goToLocation() {

}

function getOrigin() {
    loc = $.session.get('map_origin');
    return typeof loc !== 'undefined' ? loc : getYourLocation();
}