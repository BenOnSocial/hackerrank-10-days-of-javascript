btn5.onclick = function() {
    var rotationOrder = [1, 2, 3, 6, 9, 8, 7, 4];
    var values = [];

    for (let i of rotationOrder) {
        values.push(document.getElementById("btn" + i).innerHTML);
    }

    var last = values.pop();
    values.unshift(last);

    for (let i of rotationOrder) {
        var value = values.shift();
        document.getElementById("btn" + i).innerHTML = value;
    }
}
