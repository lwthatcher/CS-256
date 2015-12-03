
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