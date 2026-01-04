window.addEventListener("wheel", function (dets) {
    if (dets.deltaY > 0) {
        gsap.to(".marque", {
            transform: "translateX(-200%)",
            duration: 4,
            ease: "none",
            repeat: -1
        });

        //to rotate the arrow
        gsap.to(".marque img",{
            rotate:180
        })
    } else {
        gsap.to(".marque", {
            transform: "translateX(0%)",
            duration: 4,
            ease: "none",
            repeat: -1
        });

        gsap.to(".marque img",{
            rotate:0
        })
    }
})

