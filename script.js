   
        var lastScrollTop = 0;
        window.addEventListener("scroll", function() {
            var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            if (currentScroll > lastScrollTop) {
                // Descendre la page
                document.querySelector('.creator-name').classList.remove('hide');
            } else {
                // Monter la page
                document.querySelector('.creator-name').classList.add('hide');
            }
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        }, false);
    
