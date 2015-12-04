
function populatePage() {
    var page = $('#page');
    var children = getRegisteredChildren();

    $.each(children, function(i, child) {
        var childDiv = generateDiv(child);
        page.append(childDiv);
    });
}

function generateDiv(child) {
    var result =
        '<div class="child alt" onclick="goToMap(' + child.device_id + ')" >' +
            '<div class="child-name">' +
                child.name +
            '</div>' +
            '<div class="icon-right-small">' +
                '<img src="../images/child_02.png" width="70%" height="70%"/>' +
            '</div>' +
        '</div>';
    return result;
}