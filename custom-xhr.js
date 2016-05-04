function customCreateXMLHttpRequest() {
	if (window.ActiveXObject) {
		return new ActiveXObject("Microsoft.XMLHTTP");
	} else if (window.XMLHttpRequest) {
		return new XMLHttpRequest();
	}
}

function customXhrPost(url, data, callback) {
	var params = new FormData();
	for (var k in data) {
		params.append(k, data[k]);
	}
	var xhr = customCreateXMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (this.readyState === 4 && this.status === 200) {
			callback(JSON.parse(this.responseText));
		}
	}
	xhr.open("POST", url, true);
	xhr.send(params);
}