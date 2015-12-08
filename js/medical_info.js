
function populatePage() {
    var page = $('#page');
    var children = getRegisteredChildren();

    $.each(children, function(i, child) {
        var childDiv = generateDiv(child);
        page.append(childDiv);
    });
}

function showMedicalInfo(child){
     var result="<ul>";
     for(var i=0;i<child.medical.length;i++){
        result += "<li>" + child.medical[i] + "</li>";
     }
     result+="</ul>";
    return result;
}

function toggleInfo(id){
    //$(id).toggle();
    //var selector="#dev"+id;
    //console.log($(selector).name);
    //$(selector).toggle();
}
function generateDiv(child) {
    var result =
        '<div class="child link alt" onclick="toggleInfo(' + child.device_id + ')" >' +
            '<div class="child-name">' +
                child.name +
            '</div>' +
            '<div id="dev" class="icon-right-small" >' +
                '<img src="../images/emergency_02.png" width="70%" height="70%"/>' +
            '</div>' +            
        '</div>' +
        '<div class="child alt medical_info">' +
            showMedicalInfo(child);
        '</div>';
    return result;
}