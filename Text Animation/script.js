function breakTheText() {
    let h1 = document.querySelector("h1")
    let h1text = h1.textContent

    let splitedText = h1text.split("")
    let halfValue = splitedText.length/2

    let clutter = ""
    splitedText.forEach(function (e,idx) {
        if(idx<halfValue){
            clutter += `<span class="a">${e}</span>`
        }else{
            clutter += `<span class="b">${e}</span>`
        }
    })

    h1.innerHTML = clutter
}

breakTheText()


// gsap.from("h1 span",{
//     y:70,
//     opacity:0,
//     duration:0.8,
//     dalay:0.5,
//     stagger:0.15
// })

gsap.from("h1 .a",{
    y:80,
    opacity:0,
    duration:0.6,
    dalay:0.5,
    stagger:0.15
})

gsap.from("h1 .b",{
    y:80,
    opacity:0,
    duration:0.6,
    dalay:0.5,
    stagger:-0.15
})