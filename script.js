//nav section

const menuOpen = document.querySelector('.menu-open')
const menuClose = document.querySelector('.menu-close')
const backdrop = document.querySelector('.backdrop')
const links = document.querySelector('.links')

menuOpen.addEventListener('click', () => {
    menuOpen.classList.add('active')
    menuClose.classList.add('active')
    backdrop.classList.add('active')
    links.classList.add('active')
})

menuClose.addEventListener('click', () => {
    menuOpen.classList.remove('active')
    menuClose.classList.remove('active')
    backdrop.classList.remove('active')
    links.classList.remove('active')
})



const dropDown = document.querySelectorAll('.drop')
const navItem = document.querySelectorAll('.nav-item')
dropDown.forEach(drop => {
    drop.addEventListener('click', (e) => {
        e.preventDefault()
        const parent = drop.closest('.nav-item')

        navItem.forEach(item => {
            if (item !== parent) {
                item.classList.remove('active');
                item.querySelector('.drop')?.classList.remove('active');
            }
        });
        // dropDown.forEach(d=> d.classList.remove('active'))
        parent.classList.toggle('active');
        drop.classList.toggle('active');
    })

})

document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-item')) {
        navItem.forEach(item => {
            item.classList.remove('active')
            item.querySelector('.drop')?.classList.remove('active');
        })
    }
})

//hero section annimation

const heroSection = document.querySelectorAll('.hero-section')
let current = 0

function currentSection() {
    gsap.to(heroSection[current], {
        opacity: 0,
        y: -30,
        duration: 1
    })

    current = (current + 1) % heroSection.length

    gsap.fromTo(heroSection[current], {
        opacity: 0,
        y: 30
    }, {
        opacity: 1,
        y: 0,
        duration: 1
    }
    )

}

setInterval(currentSection, 4000);



const sections = document.querySelectorAll(".sec")
sections.forEach(section => {
    gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "bottom top",
            toggleActions: "play reverse play reverse",
            // markers: true

        }
    })
        .from(section, {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: 'ease',
            // stagger: 0.3
        });
});


