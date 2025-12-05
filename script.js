// gsap.to("#box",{
//     x:1000,
//     rotate:360,
//     duration:1.5,
//     delay:1,
//     rotate:360
// })

// gsap.from("#box2",{
//     x:1000,
//     duration:2,
//     delay:1
// })

// gsap.to("#box2",{
//     x:1000,
//     duration:2,
//     delay:2.5,
//     backgroundColor:"green",
//     borderRadius:"50%",
//     scale:0.5
// })


// gsap.from("h1",{
//     opacity:0,
//     duration:1,
//     y:30,
//     delay:1,
//     stagger:0.3
// })

// gsap.to("#box3",{
//     x:1000,
//     duration:1,
//     delay:4,
//     rotate:360,
//     // repeat:-1,
//     // yoyo:true
// })

//for timey working one after another

// var tl = gsap.timeline();

// tl.to("#box", {
//     x: 1000,
//     rotate: 720,
//     duration: 1.5,
//     delay: 1
// });

// tl.to("#box2", {
//     x: 1000,
//     rotate: 360,
//     duration: 1.5
// });

// tl.to("#box3", {
//     x: 1000,
//     duration: 1.5
// });




//
var tl = gsap.timeline()

tl.from("h2",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5
})

tl.from("h4",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.3
})

tl.from("h1",{
    y:20,
    opacity:0,
    duration:0.5,
    scale:0.3
})