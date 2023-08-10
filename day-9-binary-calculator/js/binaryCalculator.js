document.getElementById("btnClr").onclick = function() {
    document.getElementById("res").innerHTML = "";
}

document.getElementById("btnEql").onclick = function() {
    const res = document.getElementById("res");
    let expression = res.innerHTML;
    if (expression) {
        res.innerHTML = eval(expression);
    }
}

document.querySelectorAll("#btns > button").forEach(e => {
    if (!["btnClr", "btnEql"].includes(e.id)) {
        e.onclick = function() {
            const res = document.getElementById("res");
            res.innerHTML = res.innerHTML + e.innerHTML;
        }
    }
});
