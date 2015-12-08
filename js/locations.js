function getLocations() {
    console.log('getting locations', $.session.get('locations'));
    return $.session.get('locations');
}

function getLocationById(loc_id) {
    var locations = getLocations();
    console.log('locations', $.session.get('locations'));
    return locations[loc_id];
}

function toLocationMap(locations) {
    var loc_map = {};
    $.each(locations, function(i, loc) {
        loc_map[loc.id] = loc;
    });
    return loc_map;
}

function createLocationId() {
    var locations = getLocations();
    var max = 0;
    $.each(locations, function(id) {
        if (id > max) {
            max = id;
        }
    });
    return max + 1;
}
