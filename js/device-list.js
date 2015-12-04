
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