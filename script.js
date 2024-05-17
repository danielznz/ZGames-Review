document.querySelectorAll('.wrapper').forEach(wrapper => {
    const carousel = wrapper.querySelector('.carousel');
    const leftBtn = wrapper.querySelector('.botao:first-child');
    const rightBtn = wrapper.querySelector('.botao:last-child');
    const firstCardWidth = carousel.querySelector('.card').offsetWidth;
    const carouselChildrens = [...carousel.children];

    let isDragging = false, startX, startScrollLeft;

    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
    carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML)
    });
    carouselChildrens.slice(0, cardPerView).reverse().forEach(card => {
        carousel.insertAdjacentHTML("beforeend", card.outerHTML)
    });

    leftBtn.addEventListener("click", () => {
        carousel.scrollLeft -= firstCardWidth;
    });

    rightBtn.addEventListener("click", () => {
        carousel.scrollLeft += firstCardWidth;
    });

    const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    }

    const dragging = (e) => {
        if (!isDragging) return;
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    }

    const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
    }

    const infiniteScroll = () => {
        if (carousel.scrollLeft === 0) {
            carousel.classList.add("no-transition")
            carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
            carousel.classList.remove("no-transition")
        } else if (carousel.scrollLeft === carousel.scrollWidth - carousel.offsetWidth) {
            carousel.classList.add("no-transition")
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove("no-transition")
        }
    }

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);
});
    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);

    var videoPlayer = document.getElementById("videoPlayer");
    var myVideo = document.getElementById("myVideo");
    function stopVideo() {
    videoPlayer.style.display = "none";
    }
    function playVideo (file) {
    myVideo.src = file;
    videoPlayer.style.display = "block";
    }
