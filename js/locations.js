function toLocationMap(locations) {
    var loc_map = {}
    $.each(locations, function(i, loc) {
        loc_map[loc.id] = loc;
    });
    return loc_map;
}

function createLocationId() {

}