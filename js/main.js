/*Navbar mobile*/
function menuMobile() {
    const $navbar = document.querySelector('nav ul')
    const $toggle = document.querySelector('.toggle')
    const $icon = document.querySelector('.fa-bars')
   
    
    $toggle.addEventListener('click', () => {
        if ($icon.classList.contains('fa-bars')) {
            $icon.classList.replace('fa-bars','fa-times')
        } else {
            $icon.classList.replace('fa-times', 'fa-bars')
        }
        $navbar.classList.toggle('active')
    })
    
}
menuMobile()

/*Show Header*/
function showHeaderScroll() {
    document.onreadystatechange = function () {
        let lastScrollPosition = 0
        const header = document.querySelector('header')
        window.addEventListener('scroll', function (e) {
            lastScrollPosition = window.scrollY

            if (lastScrollPosition > 100)
                header.classList.add('header-white')
            else
                header.classList.remove('header-white')
        })
    }
}

showHeaderScroll()


/*Scroll animation*/

function scrollAnimation() {
    const showElement = () => {
        const section = document.querySelectorAll('.js-scroll')
        section.forEach((element) => {
            const elementHeight = window.innerHeight * 0.4
            const elementTop = element.getBoundingClientRect().top
            const elementScroll = (elementHeight - elementTop) < 0 
            if (elementScroll)
                element.classList.add('active')
        })
    }

    window.addEventListener('scroll', showElement)
}

scrollAnimation()