let screen = document.getElementById("screen");
let bottun = document.querySelectorAll("button");
for (element of bottun) {
    element.addEventListener("click", (e) => {
        let sara = "";
        let honda = "";
        let data = e.target.innerText;
        console.log(data);
        if (data == "c") {
            screen.value = " ";
        } else if (data == "=") {
            screen.value = eval(screen.value);
        } else if (data == "back") {
            sara = screen.value.slice(0, -1);
            screen.value = sara;

        } else if (data == "root") {
            sara = Math.sqrt(screen.value);
            screen.value = sara;

        } else if (data == "sqrt") {
            sara = screen.value * screen.value;
            screen.value = sara;

        } else if (data == "clear") {
            screen.value = " ";

        } else {
            sara = data;

            screen.value += sara;
            console.log("this is", screen.value);
        }
    })
}