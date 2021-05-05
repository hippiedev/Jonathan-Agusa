import gsap from 'gsap';

export const textIntro = (elem1, elem2) => {
    gsap.from([elem1, elem2], {
        y: -10,
        opacity: 0,
        stagger: {
            amount: 0.6
        }
    })
}

export const linkIntro = (elem1, elem2, elem3, elem4) => {
    gsap.from([elem1, elem2, elem3, elem4], {
        duration: 0.3,
        y: -10,
        delay: 1,
        opacity: 0,
        ease: "power4.inOut",
        stagger: {
          amount: 0.3,
        },
      })
}
export const menuShow = (elem1, elem2) => {
    gsap.from([elem1, elem2], {
      duration: 0.7,
      height: 0,
      transformOrigin: "right top",
      skewY: 2,
      ease: "power4.inOut",
      stagger: {
        amount: 0.2,
      },
    })
  }
  
  //Close menu
  export const menuHide = (elem1, elem2) => {   
    gsap.to([elem1, elem2], {
      duration: 0.8,
      height: 0,
      ease: "power4.inOut",
      stagger: {
        amount: 0.07,
      },
    })
  }
  
  //Stagger links
  export const staggerLinks = (elem1, elem2, elem3) => {
    gsap.from([elem1, elem2, elem3], {
      duration: 1,
      y: 10,
      opacity: 0,
      delay: 0.3,
      ease: "power4.inOut",
      stagger: {
        amount: 0.5,
      },
    })
  }

  export const postIntro = (elem) => {
    gsap.from(elem, {
      y: -10,
      opacity: 0,
      duration: 0.8,
      ease: "ease-in"
    })
  }

  export const aboutIntro = (elem) => {
    gsap.from (elem, {
      y: -10,
      opacity: 0,
      duration: 0.8,
      ease: "ease-in",
      delay: 2.5,
    })
  }