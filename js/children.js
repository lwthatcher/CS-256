
function getRegisteredChildren() {
    var result = [];
    children = $.session.get('children');
    devices = $.session.get('registered_devices');
    $.each(devices, function(i, device_id) {
        result.push(children[device_id]);
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