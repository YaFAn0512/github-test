document.getElementById("addButton").onclick = function () {
    const btn = document.createElement("button");
    btn.textContent = "BUTTON";
    document.getElementById("container").appendChild(btn);
};