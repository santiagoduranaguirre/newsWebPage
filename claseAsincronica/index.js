window.addEventListener("load", function(){
    let botones = document.querySelectorAll(".mainTitle")

    for (let i = 0; i < botones.length; i++) {
        botones[i].addEventListener("click", function() {
            this.style.color = "red"
        })
    }

    window.addEventListener("keypress", function(e) {
        if (e.key == "Enter") {
            alert("Tocaste enter cabron!")
        }
    })
})
