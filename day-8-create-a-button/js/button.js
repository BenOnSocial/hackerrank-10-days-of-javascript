var btn = document.createElement("button");
btn.id = "btn";
btn.innerHTML = 0;
btn.onclick = function() {
    btn.innerHTML = parseInt(btn.innerHTML.trim()) + 1;
};
document.body.appendChild(btn);
