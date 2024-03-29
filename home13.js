  // page load animation
  let homeLoadTl = gsap.timeline();

  homeLoadTl
    .to(".loader_colums", {
      delay: 0.5,
      yPercent: -100,
      duration: 1.6,
      stagger: {
        each: 0.1
      },
      ease: "power4.inOut",
      onComplete: () => {
        $(".loader_component").css("display", "none");
      }
    })
    .from(
      ".hero_heading-wrapper .char",
      {
        yPercent: 100,
        duration: 0.8,
        stagger: {
          amount: 0.5
        },
        ease: "power3.out"
      },
      "-=1"
    )
    .from(
      ".hero_sub-text-wrap .word",
      {
        yPercent: 100,
        duration: 1,
        ease: "power2.out"
      },
      "<45%"
    )
    .from(
      ".zervtek-hero-background",
      {
        scale: 1.3,
        ease: "power1.inOut",
        duration: 1.5
      },
      0
    );
    

// Animate Pricing Text From To
$(".header_text-move").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this);;

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top center",
      end: "bottom top",
      scrub: 0.5
    }
  });
  tl.to(targetElement, {
      y: "100%"
    },
    {
      width: "100%",
      duration: 1
    }
  );
});

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

window.addEventListener("DOMContentLoaded", (event) => {
  // Split text into spans
  let typeSplit = new SplitType("[text-split]", {
    types: "words, chars",
    tagName: "span"
  });

  // Link timelines to scroll position
  function createScrollTrigger(triggerElement, timeline) {
    // Reset tl when scroll out of view past bottom of screen
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top bottom",
      onLeaveBack: () => {
        timeline.progress(0);
        timeline.pause();
      }
    });
    // Play tl when scrolled into view (60% from top of screen)
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top 60%",
      onEnter: () => timeline.play()
    });
  }

  $("[words-slide-up]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".word"), { opacity: 0, yPercent: 100, duration: 0.5, ease: "back.out(2)", stagger: { amount: 0.5 } });
    createScrollTrigger($(this), tl);
  });

$("[words-slide-down]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".word"), { opacity: 0, yPercent: -100, duration: 0.5, ease: "back.out(2)", stagger: { amount: 0.5 } });
    createScrollTrigger($(this), tl);
});


  $("[words-rotate-in]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.set($(this).find(".word"), { transformPerspective: 1000 });
    tl.from($(this).find(".word"), { rotationX: -90, duration: 0.6, ease: "power2.out", stagger: { amount: 0.6 } });
    createScrollTrigger($(this), tl);
  });

  $("[words-slide-from-right]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".word"), { opacity: 0, x: "1em", duration: 0.6, ease: "power2.out", stagger: { amount: 0.2 } });
    createScrollTrigger($(this), tl);
  });

  $("[words-slide-from-left]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".word"), { opacity: 0, x: "-1em", duration: 0.6, ease: "power2.out", stagger: { amount: 0.2 } });
    createScrollTrigger($(this), tl);
  });

  $("[letters-slide-up]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".char"), { yPercent: 100, duration: 0.2, ease: "power1.out", stagger: { amount: 0.6 } });
    createScrollTrigger($(this), tl);
  });

$("[letters-slide-down]").each(function (index) {
  let tl = gsap.timeline({
    paused: true,
    scrollTrigger: {
      trigger: $(this),
      start: "top 80%", // Adjust these values as needed
      end: "bottom center", // Adjust these values as needed
      // Other ScrollTrigger properties can be included here if needed
    }
  });

  tl.from($(this).find(".char"), { yPercent: -120, duration: 0.3, ease: "power1.out", stagger: { amount: 0.7 } });

  // Assuming createScrollTrigger sets up additional configurations
  createScrollTrigger($(this), tl);
});


  $("[letters-slide-down99]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".char"), { yPercent: -120, duration: 0.3, ease: "power1.out", stagger: { amount: 0.7 } });
    createScrollTrigger($(this), tl);
  });

// Targeting elements with the 'data-slide-from-left' attribute
$("[data-slide-from-left]").each(function() {
    // GSAP animation for each matched element
    gsap.from(this, {
        x: -500, // Start from -500px on the X-axis (left side)
        opacity: 0, // Start from fully transparent
        duration: 2, // Duration of the animation
        ease: "power2.out", // Easing function
        scrollTrigger: {
            trigger: this,
            start: "top 75%", // Start when the top of the element hits 75% of the viewport height
            end: "bottom top", // End when the bottom of the element passes the top of the viewport
            toggleActions: "play none none none"
        }
    });
});


$("[letters-fade-in]").each(function (index) {
    let tl = gsap.timeline({
        paused: true,
        scrollTrigger: {
            trigger: $(this),
            start: "top 80%", // Example: when the top of the element hits the bottom of the viewport
            end: "center center", // Example: when the bottom of the element passes the top of the viewport
            scrub: true, // Optional: Smooth scrubbing effect when scrolling
            toggleActions: "play none none none" 
        }
    });

    tl.from($(this).find(".char"), { opacity: 0, duration: 0.2, ease: "power1.out", stagger: { amount: 0.8 } });
});

  $("[letters-fade-in99]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".char"), { opacity: 0, duration: 0.2, ease: "power1.out", stagger: { amount: 0.8 } });
    createScrollTrigger($(this), tl);
  });


  $("[letters-fade-in-random]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".char"), { opacity: 0, duration: 0.05, ease: "power1.out", stagger: { amount: 0.4, from: "random" } });
    createScrollTrigger($(this), tl);
  });

   $("[scrub-each-word]").each(function (index) {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top 90%",
        end: "center center",
        scrub: true
      }
    });
    tl.from($(this).find(".word"), { opacity: 0.2, duration: 0.2, ease: "power1.out", stagger: { each: 0.4 } });
  });

$("[data-slide-up]").each(function () {
    let tl = gsap.timeline({ paused: true });
    tl.from(this, { opacity: 0, y: 50, duration: 0.5, ease: "back.out(1.7)" });

    createScrollTrigger($(this), tl, {
        start: "top bottom", // Animation starts when the top of the element hits the bottom of the viewport
        end: "bottom 80%"    // Animation ends when the bottom of the element passes the top of the viewport
    });
});


$("[data-slide-down]").each(function () {
    let tl = gsap.timeline({ paused: true });
    tl.from(this, { opacity: 0, y: -50, duration: 0.5, ease: "back.out(1.7)" });

    createScrollTrigger($(this), tl, {
        start: "top bottom", // Animation starts when the top of the element hits the bottom of the viewport
        end: "bottom 80%"    // Animation ends when the bottom of the element passes the top of the viewport
    });
});


   $("[scrub-each-word2]").each(function (index) {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top 80%",
        end: "top center",
        scrub: true
      }
    });
    tl.from($(this).find(".word"), { opacity: 0.2, duration: 0.2, ease: "power1.out", stagger: { each: 0.4 } });
  });

  // Avoid flash of unstyled content
  gsap.set("[text-split]", { opacity: 1 });
});


document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray("[data-animate-icon]").forEach(function(icon) {
    gsap.fromTo(icon, 
      {
        scale: 0.5,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: icon,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          markers: true // Remove this line in production, it's just for debugging
        }
      }
    );
  });
});












//Contact form 
// Script to combine phone parts into 'Full phone'

const specialContainer = document.getElementById('zervtek-contact-form');

// Disable Lenis smooth scrolling when entering the container
specialContainer.addEventListener('mouseenter', () => {
    lenis.destroy(); // This disables Lenis
});

// Re-enable Lenis smooth scrolling when leaving the container
specialContainer.addEventListener('mouseleave', () => {
    lenis.init(); // This re-initializes Lenis
    requestAnimationFrame(raf);
});


$(function() {
  
  // Trigger when the form is submitted
  $("#form").on("submit", function(e) {
    
    // Combine the phone parts into the #fullPhone input
    // This will be passed through in the form submit
    $("#fullPhone").val(
      `${$("#dialCode").val()} ${$("#phone").val()}`
    );    
  
    // DEBUG - REMOVE THIS IN YOUR CODE
    // Write the results to the console so we can see if it worked
    console.log(JSON.stringify(
      $("form").serializeArray()
    ));

  });
  
});


<!-- Intl-tel-input -->

var input = document.querySelector("#phone"),
	dialCode = document.querySelector(".dialCode"),
 	errorMsg = document.querySelector("#error-msg"),
    validMsg = document.querySelector("#valid-msg");

var iti = intlTelInput(input, {
  initialCountry: "us",
  placeholderNumberType: 'FIXED_LINE',
});

var updateInputValue = function (event) {
       dialCode.value = "+" + iti.getSelectedCountryData().dialCode;
};
input.addEventListener('input', updateInputValue, false);
input.addEventListener('countrychange', updateInputValue, false);

var errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];

var reset = function() {
  input.classList.remove("error");
  errorMsg.innerHTML = "";
  errorMsg.classList.add("hide");
  validMsg.classList.add("hide");
};

input.addEventListener('blur', function() {
  reset();
  if (input.value.trim()) {
    if (iti.isValidNumber()) {
      validMsg.classList.remove("hide");
    } else {
      input.classList.add("error");
      var errorCode = iti.getValidationError();
      errorMsg.innerHTML = errorMap[errorCode];
      errorMsg.classList.remove("hide");
    }
  }
});

input.addEventListener('change', reset);
input.addEventListener('keyup', reset);



  document.addEventListener('DOMContentLoaded', function() {
    // Ensure GSAP and ScrollTrigger are available
    if (gsap && ScrollTrigger) {
      // Register the ScrollTrigger plugin
      gsap.registerPlugin(ScrollTrigger);

      // Create the animation
      gsap.fromTo('.features-component', 
        { yPercent: 200, opacity: 0 }, // Starting state: moved down a bit and transparent
        {
          yPercent: 0, // Ending state: original position
          opacity: 1, // Full opacity
          ease: "power1.out", // Smoother ease-out effect
          scrollTrigger: {
            trigger: '.zervtek-export-process', // Element that triggers the scroll animation
            start: 'bottom bottom', // When the bottom of the trigger is 30% from the bottom of the viewport
            end: 'bottom top', // When the center of the trigger is at the center of the viewport
            scrub: true, // Smooth scrubbing effect
            markers: true // Enable markers for debugging
          }
        }
      );
    } else {
      console.error('GSAP or ScrollTrigger not found');
    }
  });
