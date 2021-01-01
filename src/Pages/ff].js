const { logDOM } = require("@testing-library/react")

TweenMax.from(".ellipse-container", 1, {
      delay: 2,
      opacity: 0,
      ease: Expo.easeInOut
    })

    TweenMax.to(
      ellipse_container,
      1,
      {
          delay: 2,
          opacity: 0, 
          top: "-100%", 
          ease: Expo.easeInOut
      }
  )


    TweenMax.from(".ellipse yellow", 1, {
      delay: 3.5,
      opacity: 0,
      ease: Expo.easeInOut
    })

    TweenMax.to(
      ellipse_yellow,
      1,
      {
          delay: 3.5,
          opacity: 0, 
          ease: Expo.easeInOut
      }
  )


    TweenMax.from(".circle1", 1, {
      delay: 2.4,
      opacity: 0,
      ease: Expo.easeInOut
    })

    TweenMax.to(
      circle1,
      1,
      {
          delay: 2.4,
          opacity: 0, 
          ease: Expo.easeInOut
      }
  )

    TweenMax.from(".circle2", 1, {
      delay: 2.6,
      opacity: 0,
      ease: Expo.easeInOut
    })

    TweenMax.to(
      circle2,
      1,
      {
          delay: 2.6,
          opacity: 0, 
          ease: Expo.easeInOut
      }
  )

    TweenMax.from(".logo", 1, {
      delay: 3,
      opacity: 0,
      y: -100,
      ease: Expo.easeInOut
    })

    TweenMax.to(
      Logo,
      1,
      {
          delay: 3,
          opacity: 0, 
          y: -100,
          ease: Expo.easeInOut
      }
  )

    TweenMax.staggerFrom(".menu-links ul li", 1, {
      delay: 3.2,
      opacity: 0,
      x: -100,
      ease: Expo.easeInOut
    }, 0.08)

    TweenMax.to(
      menu,
      1,
      {
          delay: 3.2,
          opacity: 0, 
          x: -100,
          ease: Expo.easeInOut
      }
  )

    TweenMax.from(".scrolldown", 1, {
      delay: 3.4,
      opacity: 0,
      y: 100,
      ease: Expo.easeInOut
    })

    TweenMax.to(
      scrolldown,
      1,
      {
          delay: 3.4,
          opacity: 0, 
          y: 100,
          ease: Expo.easeInOut
      }
  )

    TweenMax.from(".text .title", 1, {
      delay: 3,
      opacity: 0,
      x: 200,
      ease: Expo.easeInOut
    })

    TweenMax.to(
      text,
      1,
      {
          delay: 3,
          opacity: 0, 
          x: 200,
          ease: Expo.easeInOut
      }
  )

  TweenMax.to(
    title,
    1,
    {
        delay: 3,
        opacity: 0, 
        x: 200,
        ease: Expo.easeInOut
    }
)

    TweenMax.from(".text p", 1, {
      delay: 3.2,
      opacity: 0,
      x: 200,
      ease: Expo.easeInOut
    })

    TweenMax.to(
      p,
      1,
      {
          delay: 3.2,
          opacity: 0, 
          x: 200,
          ease: Expo.easeInOut
      }
  )

    TweenMax.from(".watchnow", 1, {
      delay: 3.4,
      opacity: 0,
      x: 200,
      ease: Expo.easeInOut
    })

    TweenMax.to(
      watchhow,
      1,
      {
          delay: 3.4,
          opacity: 0, 
          x: 200,
          ease: Expo.easeInOut
      }
  )


    TweenMax.staggerFrom(".media ul li", 1, {
      delay: 3,
      opacity: 0,
      y: 100,
      ease: Expo.easeInOut
    }, 0.08)

    TweenMax.to(
      media_ul,
      1,
      {
          delay: 3,
          opacity: 0, 
          y: 100,
          ease: Expo.easeInOut
      }
  )