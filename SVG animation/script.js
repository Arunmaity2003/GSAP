let path = `M 10 100 Q 500 100 990 100`

let finalPath = `M 10 100 Q 500 100 990 100`

let string = document.querySelector("#string");

// string.addEventListener("mouseenter",function(dets){
//     console.log(dets)
// })

// string.addEventListener("mouseleave",function(){
//     console.log("lived")
// })

string.addEventListener("mousemove",function(dets){
    path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`
    gsap.to("svg path",{
        attr: {d: path},
        duration:0.3,
        ease:"power3.out"
    })
})


string.addEventListener("mouseleave",function(dets){
    gsap.to("svg path",{
        attr: {d: finalPath},
        duration:1.5,
        ease: "elastic.out(1,0.2)",
    })
})


//or can apply more professional approch
// let string = document.querySelector("#string");
// let svg = string.querySelector("svg");

// let startX = 100;
// let endX = 400;
// let baseY = 80;

// let finalPath = `M ${startX} ${baseY} Q 250 ${baseY} ${endX} ${baseY}`;

// string.addEventListener("mousemove", function (e) {
//   let rect = string.getBoundingClientRect();

//   // Mouse position relative to container
//   let x = e.clientX - rect.left;
//   let y = e.clientY - rect.top;

//   // Clamp X inside margins
//   x = Math.max(startX, Math.min(x, endX));

//   let path = `M ${startX} ${baseY} Q ${x} ${y} ${endX} ${baseY}`;

//   gsap.to("svg path", {
//     attr: { d: path },
//     duration: 0.3,
//     ease: "power3.out",
//   });
// });

// string.addEventListener("mouseleave", function () {
//   gsap.to("svg path", {
//     attr: { d: finalPath },
//     duration: 1.5,
//     ease: "elastic.out(1, 0.2)",
//   });
// });
