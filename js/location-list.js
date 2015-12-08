
function populatePage() {
    var page = $('#page');
    var children = getRegisteredChildren();

    $.each(children, function(i, child) {
        var childDiv = generateDiv(child);
        page.append(childDiv);
    });
}

function generateDiv(child) {
    var child_id_str = 'child-' + child.device_id.toString();
    var result =
        '<div class="child alt" id="' + child_id_str + '" >' +
            '<div class="child-name">' +
                child.name +
            '</div>' +
            '<div class="icon-right-small link" onclick="removeChildID(\''+ child.device_id + '\');" >' +
                '<img src="../images/x_icon_02.png" width="70%" height="70%"/>' +
            '</div>' +
        '</div>';
    return result;
}

function removeChildID(child_id) {
    var child_id_str = 'child-' + child_id.toString();
    $('#'+child_id_str).remove();
    unregisterChild(child_id);
}

function neverAllowed(){
    document.getElementById("new-time").disabled = true;
}

function openAddLocationDialog() {
    $('#add-device-button').hide();
    var adding =
        "<div class='add-location'>" +
            "<div class='input-field'>" +
                "<input id='new-title' style='width:100%' type='text' name='title' placeholder='title of location'>" +
            "</div>" +
            "<div class='input-field'>" +
                "<input id='new-time' style='width:100%' type='text' name='id' placeholder='time frame at location'>" +
            "</div>" +
            "<div class='never-field'>" +
            "<input id='never-checkbox' type='checkbox' name='never' value='never' onclick> Never<br>" +
            "</div>" +
            "<div class='save-d'>" +
                "<div class='save-text' onclick='addLocation()'>Save</div>" +
                "<div class='cancel-text' onclick='cancel()'>Cancel</div>" +
            "</div>" +
        "<div>";
    $('.page').append(adding);
}

function openAddLocationPage() {
    
}

function cancel() {
    $('.add-location').remove();
    document.location.href = "locations.html";
}

function addLocation() {
    var name = $("#new-title").val();
    var time = $("#new-time").val();
    var never = document.getElementById("never-checkbox").checked;
    
    //== assumes you were given a valid id that is not already in use ==
    //update children in session
    children = $.session.get('children');
    child = children[id];
    child.name = name;
    children[id] = child;
    $.session.set('children', children);
    //update devices in session
    devices = $.session.get('registered_devices');
    devices.push(id);
    $.session.set('registered_devices', devices);
    //add child to page
    var page = $('#add-device-button');
    var childDiv = generateDiv(child);
    page.before(childDiv);
    //remove pop-up, and show add device button
    $('.add-child').remove();
    $('#add-device-button').show();

}
