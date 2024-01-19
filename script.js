var tl = gsap.timeline()




tl.from("#navbar", {
    y: -100,
    duration: 0.7,
    delay: 1,
})
tl.from("#nav-parts", {

    y: 200,
    delay: 0.5,
    duration: 0.5,
    stagger: 0.3,
    scale: 3,
    opacity: 0,
})
tl.from("#page1", {
    scale: -1,
    x: -1400,
    duration: 1,
    opacity: 0,

})
tl.from("#first-p-img", {
    scale: -1,
    x: 1400,
    duration: 1,
    opacity: 0,
})
tl.from("#first-p-txt", {
    scale: -1,
    x: -1400,
    duration: 1,
    opacity: 0,
    stagger: 0.4,

})

gsap.from("#p2-container", {
    y: -200,
    opacity: 0,
    scrollTrigger: {
        trigger: "#p2-container",
        scroller: "body",
        start: "top 60%",
        end: "top 45%",
        scrub: 3,
    }
});


