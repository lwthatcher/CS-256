
function populatePage() {
    var page = $('#page');
    var children = getRegisteredChildren();

    $.each(children, function(i, child) {
        var childDiv = generateDiv(child);
        page.append(childDiv);
    });
}

function goToLocationsPage()
{
    document.location.href = "locations.html";
}

function generateDiv(child) {
    var result =
        '<div class="child link alt" onclick="goToLocationsPage()" >' +
            '<div class="child-name">' +
                child.name +
            '</div>' +
            '<div class="icon-right-small">' +
                '<img src="../images/manage_locations_02.png" width="70%" height="70%"/>' +
            '</div>' +
        '</div>';
    return result;
}
