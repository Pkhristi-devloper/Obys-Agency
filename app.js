function locoMotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

function loadingAnimation() {
  let h5timer = document.querySelector(".line .line1-part1 h6");

  let tl = gsap.timeline();
  tl.from(".line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5,
  });
  tl.from(".line .line1-part1 , .line h2", {
    opacity: 0,
    onStart: function () {
      let grow = 0;
      let int = setInterval(() => {
        if (grow <= 100) {
          h5timer.innerHTML = grow++;
        } else {
          clearInterval(int);
        }
      }, 35);
    },
  });
  tl.to(".line h2", {
    animationName: "blink",
    opacity: 1,
  });
  tl.to(".loader", {
    opacity: 0,
    duration: 0.2,
    delay: 3.7,
    display: "none",
  });
  tl.from("#page1", {
    opacity: 0,
    y: 1600,
    delay: 0.2,
  });
  tl.from(".hero h1,.hero h2 ", {
    y: 140,
    stagger: 0.2,
  });
  tl.from("nav", {
    opacity: 0,
  });
}
function cursorAnimation() {
  document.addEventListener("mousemove", function (det) {
    gsap.to("#cursor", {
      left: det.x,
      top: det.y,
    });
  });

  Shery.makeMagnet("#page1 .part2 h4");
  let videoCursor = document.querySelector("#video-cursor");
 let videoContainer =  document.querySelector(".video-container");
 let image = document.querySelector(".video-container img");
 let video = document.querySelector(".video-container video");
    videoContainer.addEventListener("mouseenter",function(){
    videoContainer.addEventListener("mousemove",function(det){
        gsap.to("#cursor",{
            opacity:0
        })
        gsap.to("#video-cursor",{
            left:det.x - 450,
            top:det.y - 250
        })
    })
    
  })
  videoContainer.addEventListener("mouseleave",function(){
    gsap.to("#cursor",{
        opacity:1,
    })
    gsap.to("#video-cursor",{
        top: "-15%",
        left: "70%",
    })
})
  let flag = 0;
   videoContainer.addEventListener("click",function(){
    if(flag == 0){
      flag = 1;
      videoCursor.innerHTML = `<i class="ri-pause-line"></i>`
      video.play();
      gsap.to(image, {
          opacity: 0, // Hide image
          duration: 0.5,
      });
  
      gsap.to(video, {
          opacity: 1, // Show video
          duration: 0.5,
      });
    }
    else{
      flag =0;
      videoCursor.innerHTML = `<i class="ri-play-fill"></i>`
      video.pause();
      gsap.to(image, {
        opacity: 1, // Hide image
        duration: 0.5,
    });

    gsap.to(video, {
        opacity: 0, // Show video
        duration: 0.5,
    });
    }
        })
}
function sheryJs() {
  Shery.imageEffect(".image-div", {
    style: 5,
    config: {
      a: { value: 2, range: [0, 30] },
      b: { value: 0.75, range: [-1, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.7272695760684946 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: false },
      maskVal: { value: 1.24, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: false },
      onMouse: { value: 0 },
      noise_speed: { value: 0.6, range: [0, 10] },
      metaball: { value: 0.43, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0.02, range: [0, 0.1] },
      noise_height: { value: 0.27, range: [0, 2] },
      noise_scale: { value: 12.98, range: [0, 100] },
    },
    gooey: true,
  });
}
function flagAnimation(){
  
document.addEventListener("mousemove",function(det){
  gsap.to("#flag",{
    x:det.x,
    y:det.y 
  })
});

document.querySelector(".hero#underline").addEventListener("mouseenter",function(){
  gsap.to("#flag",{
    opacity:1,
  })
});

document.querySelector(".hero#underline").addEventListener("mouseleave",function(){
  gsap.to("#flag",{
    opacity:0,
  })
})
}
function textAnimation(){
  gsap.from("footer .first h1",{
    opacity:0,
    y:50,
    delay:0.45,
    duration:1,
    onStart:function(){
      $('footer .first h1').textillate({ in: { effect: 'rollIn' } });
    }
  });

}
loadingAnimation();
cursorAnimation();
locoMotiveAnimation();
sheryJs();
flagAnimation();
textAnimation();