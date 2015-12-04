
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

function openAddChildDialog() {
    $('#add-device-button').hide();
    var adding =
        "<div class='add-child'>" +
            "<div class='input-field'>" +
                "<input id='new-name' style='width:100%' type='text' name='name' placeholder='name'>" +
            "</div>" +
            "<div class='input-field'>" +
                "<input id='new-id' style='width:100%' type='text' name='id' placeholder='device id'>" +
            "</div>" +
            "<div class='save-d'>" +
                "<div class='save-text' onclick='addChild()'>Save</div>" +
                "<div class='cancel-text' onclick='cancel()'>Cancel</div>" +
            "</div>" +
        "<div>";
    $('.page').append(adding);
}

function cancel() {
    $('.add-child').remove();
    $('#add-device-button').show();
}

function addChild() {
    var name = $("#new-name").val();
    var id = $("#new-id").val();
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