// Start swiper Photos
const swiper = new Swiper('.swiper', {
            loop: true,

            pagination: {
                el: '.swiper-pagination',
            },

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // slidesPerView: 1,
            // Responsive breakpoints
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                // when window width is >= 640px
                640: {
                    slidesPerView: 5,
                    spaceBetween: 20
                }
            }
        });