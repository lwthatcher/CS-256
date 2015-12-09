function openAddLocationDialog() {
    $('#add-device-button').hide();
    var adding =
        "<div class='add-location'>" +
            "<div class='input-field'>" +
                "<input id='new-title' style='width:100%' type='text' name='title' placeholder='title of location'>" +
            "</div>" +
            "<div class='save-d'>" +
                "<div class='save-text' onclick='addLocation()'>Save</div>" +
                "<div class='cancel-text' onclick='cancel()'>Cancel</div>" +
            "</div>" +
        "<div>";
    $('.page').append(adding);
}

function cancel() {
    $('.add-location').remove();
    document.location.href = "locations.html";
}

function hidePark() {
    var parkDiv = document.getElementById("park");
    if ($.session.get('isParkCreated') == true)
    {
        parkDiv.style.visibility = "visible";
    }
    else
    {
         parkDiv.style.visibility = "hidden";
    }
}

function addLocation() {
    var name = $("#new-title").val();
    var id = 4;
    console.log("");
    //== assumes you were given a valid id that is not already in use ==
    //update children in session
    //var locations = $.session.get('locations');
    //location = locations[id];
    //location.name = name;
    //locations[id] = location;
    //$.session.set('locations', locations);
    //update devices in session
    //devices = $.session.get('registered_devices');
    //devices.push(id);
    //$.session.set('registered_devices', devices);
    //add child to page
    //var page = $('#add-device-button');
    //var childDiv = generateDiv(child);
    //page.before(childDiv);
    //remove pop-up, and show add device button
    $('.add-location').remove();
    document.location.href = "locations.html";
    //var parkDiv = document.getElementById("park");
    //parkDiv.style.visibility = "visible";
    $.session.set("isParkCreated",true,null,null);
    
}
