

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // Move Welcome Message to the Left
    gsap.to(".welcome", {
        x: "-25vw", 
        scrollTrigger: {
            trigger: ".features",
            start: "top 80%",
            end: "top 10%",
            scrub: 1,
        }
    });

    // Slide in Feature Blocks from the Right (Ensure They Fully Appear)
    gsap.utils.toArray(".feature-block").forEach((block, index) => {
        gsap.to(block, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            delay: index * 0.2, // Staggered entrance
            scrollTrigger: {
                trigger: block,
                start: "top 85%", // Ensures it's seen before scrolling further
                end: "top 50%", // Stays visible for longer
                scrub: 1,
            }
        });
    });

    // Move Welcome & Features Off-Screen Gradually
    gsap.to([".welcome", ".features"], {
        yPercent: -150,  // Moves upwards slowly
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".features", // Waits for features to be fully visible
            start: "top 30%",  // Starts disappearing LATER
            end: "top -50%",  // Ensures it disappears after full visibility
            scrub: 3,  // Slower and more natural movement
        }
    });

    // Make "Why Sanctuary?" Appear at the Right Time
    gsap.to(".why-sanctuary-section", {
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".why-sanctuary-section", 
            start: "top 95%",  
            end: "top 70%",
            toggleActions: "play none none none",
        }
    });
    
    gsap.to("#why-sanctuary", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".why-sanctuary-section",
            start: "top 90%",
            toggleActions: "play none none none",
        }
    });

    // Make All Sanctuary Blocks Appear in Staggered Motion
    gsap.utils.toArray(".sanctuary-block").forEach((block, index) => {
        gsap.to(block, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            delay: index * 0.1, // Faster stagger effect
            scrollTrigger: {
                trigger: ".sanctuary-blocks", 
                start: "top 85%", 
                toggleActions: "play none none none",
            }
        });
    });

    ScrollTrigger.refresh();
});
