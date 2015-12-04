
function getRegisteredChildren(hasLoc) {
    hasLoc = typeof hasLoc !== 'undefined' ? hasLoc : true;
    var result = [];
    children = $.session.get('children');
    devices = $.session.get('registered_devices');
    $.each(devices, function(i, device_id) {
        var child = children[device_id];
        console.log(child);
        if (!hasLoc || child.location) {
            result.push(child);
        }
    });
    return result;
}

function toChildMap(children) {
    var child_map = {}
    $.each(children, function(i, child) {
        child_map[child.device_id] = child;
    });
    console.log('children', child_map);
    return child_map;
}

function getYourLocation() {
    return $.session.get('your_location');
}

function getChildLocation(child_id) {
    children = $.session.get('children');
    child = children[child_id];
    return child.location;
}

function unregisterChild(child_id) {
    devices = $.session.get('registered_devices');
    var idx = devices.indexOf(child_id);
    if (idx > -1) {
        devices.splice(idx, 1);
    }
}