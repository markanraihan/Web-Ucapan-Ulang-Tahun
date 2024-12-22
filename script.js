window.addEventListener('load', () => {
    Swal.fire({
        title: 'Do you want to play music?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtnoText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            document.querySelector('.music').play();
        }
        animationTimeLine();
    })
})




const animationTimeLine = () => {
    // animasi individu
    const textboxChars = document.getElementsByClassName('textbox__chat')[0];
    const hbd = document.getElementsByClassName('wish_hbd')[0];

    textboxChars.innerHTML = `<span>${textboxChars.innerHTML
        .split('')
        .join('</span><span>')}</span>`;
    hbd.innerHTML = `<span>${hbd.innerHTML
        .split('')
        .join('</span><span>')}</span>`;

    const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: '15ded'
    }

    const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: '-15deg'
    }



    const tl = gsap.timeline();
    
    tl.to('.container', 0.6, {
        visibility: 'visible'
    })
    .from('.one', 0.7, {
        opacity: 0,
        y: 10
    })
    .from('.two', 0.4, {
        opacity: 0,
        y: 10
    })
    .to('.one', 0.7, {
        opacity: 0,
        y: 10,
        delay: 3
    })
    .to('.two', 0.7, {
        opacity: 0,
        y: 10,
        delay: 1
    })

    .from('.three', 0.7, {
        opacity: 0,
        y: 10
    })
    .to('.three', 0.7, {
        opacity: 0,
        y: 10,
        delay: 3
    })

    .from('.four', 0.7, {
        opacity: 0,
        scale: 0.2
    })
    .from('.fake__button', 0.3, {
        opacity: 0,
        scale: 0.2
    })
    .staggerTo('.textbox__chat span', 1.5 , {
        visibility: 'visible'
    }, 0.05)
    .to ('.fake__button', 0.1, {
        backgroundColor: 'rgb(127,206,248)',
        delay: 4
    })
    .to('.four', 0.5, {
        opacity: 0,
        scale: 0.2,
        y: -150,
        delay: 1
    })

    .from('.idea1', 0.7, ideaTextTrans)
    .to('.idea1', 0.7, ideaTextTransLeave, '+=2.5')
    .from('.idea2', 0.7, ideaTextTrans)
    .to('.idea2', 0.7, ideaTextTransLeave, '+=2.5')
    .from('.idea3', 0.7, ideaTextTrans)
    .to('.idea3 strong', 0.5, {
        scale: 1.2,
        x: 10,
        backgroundColor: 'rgb(21,161,237)',
        color: '#fff'
    })
    .to('.idea3', 0.7, ideaTextTransLeave, '+=2.5')
    .from('.idea4', 0.7, ideaTextTrans)
    .to('.idea4', 0.7, ideaTextTransLeave, '+=2.5')

    .from('.idea5', 0.7 , {
        rotationX: 15,
        rotationZ: -10,
        skewY: '-15deg',
        y: 50,
        z: 10,
        opacity: 0
    }, '+=1.5')
    .to('.idea5 span', 0.7, {
        rotation: 90,
        x: 8
    }, '+=1.4')
    .to('.idea5', 0.7, {
        opacity: 0,
        scale: 0.2
    }, '+=2')

    .staggerFrom('.idea6 span', 0.8, {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut
    }, 0.2)
    .staggerTo('.idea6 span', 0.8, {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut
    }, 0.2, '+=1.5')
    .staggerFromTo('.baloons img', 2.5, {
        opacity: 0,
        y: 1400
    }, {
        opacity: 1,
        y: -1000
    }, 0.2)
    .from('.profile', 0.5, {
        opacity: 0,
        scale: 0.5,
        x: 25,
        y:-25,
        rotationZ: -45,
    }, '-=2')
    .staggerFrom('.wish_hbd span', 0.7, {
        opacity: 0,
        y: -50,
        rotation: 150,
        skewX: '30deg',
        ease: Elastic.easeOut.config(1, 0.5)
    }, 0.1)
    .staggerFromTo('.wish_hbd span', 0.7 , {
        scale: 1.4,
        rotateY: 150
    }, {
        scale: 1,
        rotateY: 0,
        color: '#ff69b',
        ease: Expo.easeOut
    }, 0.1, 'party')
    .from('.wish h5', 0.5, {
        opacity: 0,
        y: 10,
        skewX: '-15deg'
    }, 'party')

    .staggerTo('.eight svg', 0.8, {
        opacity: 0,
        visibility: 'visible',
        scale: 80,
        repeat: 2,
        repeatDelay: 0.6
    }, 0.3)
    .to('.six', 0.5, {
        opacity: 0,
        y: 30,
        zIndex: '-1'
    })

    .staggerFrom ('.nine p', 1, ideaTextTrans, 1.2)
    .to('.smile', 0.5, {
        rotation: 360
    }, '+=1'); 

    //restart animations
    const replayBtn = document.getElementById('smile');
    replayBtn.addEventListener('click', () => {
        tl.restart();
    })
}


