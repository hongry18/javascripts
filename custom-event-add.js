function customAddEvent(object, event, handler) {
    if (object.addEventListener) {
        object.addEventListener(event, handler);
    } else if (object.attachEvent) {
        object.attachEvent('on' + event, handler);
    }
}

function customPreventDefault(e) {
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
}

function customRemoveEvent(object, event, handler) {
    if (object.removeEventListener) {
        object.removeEventListener(event, handler);
    } else if (object.detachEvent) {
        object.detachEvent('on' + event, handler);
    }
}