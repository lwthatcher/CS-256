function getLocations() {
    return $.session.get('locations');
}

function getLocationById(loc_id) {
    var locations = getLocations();
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

function openAddLocationPage() {
    window.location='add_location.html';
}


function populateLocations(locations) {
    var page = $('#page');
    $.each(locations, function(id, location) {
            var locDiv = generateLocDiv(location);
            page.append(locDiv);
    });
}

function generateLocDiv(loc) {
    result =
        '<div class="location">' +
            '<div class="loc_name">'+ loc.name +'</div>' +
            '<div  class="loc_map" onclick="goToLocation(' + loc.id + ')">View' +
                '<img src="../images/map_icon_02.png" width="90%" height="90%"/>' +
            '</div>' +
            '<div  class="loc_edit" onclick="goToLocation(' + loc.id + ')">Edit' +
                '<img src="../images/edit_02.png" width="90%" height="90%"/>' +
            '</div>' +
            '<div class="loc_approved">' +
                '<img class="loc-center" src="../images/check_01.png" width="40%" height="40%"/>' +
            '</div>' +
    '</div>';

    return result;
}