
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
    console.log('removing child:', child_id);
    devices = $.session.get('registered_devices');
    for (i = 0; i < devices.length; i++)
    {
        if (devices[i] == child_id) {
            devices.splice(i, 1);
        }
    }
    console.log('registered devices:', devices);
    $.session.set('registered_devices', devices);
}