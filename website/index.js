$(document).ready(function (e) {
    $win = $(window);
    $navbar = $('#header');
    $toggle = $('.toggle-button');
    var width = $navbar.width();
    toggle_onclick($win, $navbar, width);

    // resize event
    $win.resize(function () {
        toggle_onclick($win, $navbar, width);
    });

    $toggle.click(function (e) {
        $navbar.toggleClass("toggle-left");
    })

    // Event listener for clicking menu items
    $('.primary-nav .nav-item').on('click', function() {
        if ($win.width() <= 768) {
            $navbar.removeClass('toggle-left'); // Close the menu on selection
        }
    });

    // Event listener for clicking outside the menu
    $(document).on('click', function(event) {
        if ($win.width() <= 768 && $navbar.hasClass('toggle-left')) {
            if (!$(event.target).closest('#header').length && !$toggle.is(event.target)) {
                $navbar.removeClass('toggle-left');
                $navbar.css({ 'z-index': '10' }); // Reset z-index when closing the menu
            }
        }
    });

});

function toggle_onclick($win, $navbar, width) {
    if ($win.width() <= 768) {
        $navbar.css({ left: `-${width}px` });
    } else {
        $navbar.css({ left: '0px' });
    }
}

var typed = new Typed('#typed', {
    strings: [
        'Cloud Computing Enthusiast',
        'Network Specialist',
        'USAF Veteran'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

var typed_2 = new Typed('#typed_2', {
    strings: [
        'Cloud Enthusiast',
        'Network Specialist',
        'USAF Vet'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch(
        "https://7bvf42yxnkdnn73fot375qnkwe0jfnqn.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` SITE VIEWS: ${data}`;
}
updateCounter();