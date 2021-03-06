
function populatePage() {
    var page = $('#page');
    var children = getRegisteredChildren();

    $.each(children, function(i, child) {
        var childDiv = generateDiv(child);
        page.append(childDiv);
    });
}



function generateDiv(child) {
    var last_page = "'find-your-child.html'";
    var result =
        '<div class="child link alt" onclick="goToMap(' + child.device_id + ',' + last_page + ')" >' +
            '<div class="child-name">' +
                child.name +
            '</div>' +
            '<div class="icon-right-small">' +
                '<img src="../images/child_02.png" width="70%" height="70%"/>' +
            '</div>' +
        '</div>';
    return result;
}
