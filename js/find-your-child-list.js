
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
        '<div class="child alt">' +
        '<div class="child-name">' +
        child.name +
        '</div>' +
        '</div>';
    return result;
}