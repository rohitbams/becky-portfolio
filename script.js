
        // Tab switching
        function showTab(tabName) {
            // Hide all content sections
            const sections = document.querySelectorAll('.content-section');
            sections.forEach(section => section.classList.remove('active'));

            // Remove active class from all tabs
            const tabs = document.querySelectorAll('.tab');
            tabs.forEach(tab => tab.classList.remove('active'));

            // Show selected section
            document.getElementById(tabName).classList.add('active');

            // Highlight active tab
            event.target.classList.add('active');
        }

        // Slideshow functionality
        function changeSlide(projectIndex, direction) {
            const project = document.querySelectorAll('.project')[projectIndex];
            const slides = project.querySelectorAll('.slide');
            const dots = project.querySelectorAll('.dot');

            let currentIndex = 0;
            slides.forEach((slide, index) => {
                if (slide.classList.contains('active')) {
                    currentIndex = index;
                }
            });

            slides[currentIndex].classList.remove('active');
            dots[currentIndex].classList.remove('active');

            let newIndex = currentIndex + direction;
            if (newIndex >= slides.length) newIndex = 0;
            if (newIndex < 0) newIndex = slides.length - 1;

            slides[newIndex].classList.add('active');
            dots[newIndex].classList.add('active');
        }

        function goToSlide(projectIndex, slideIndex) {
            const project = document.querySelectorAll('.project')[projectIndex];
            const slides = project.querySelectorAll('.slide');
            const dots = project.querySelectorAll('.dot');

            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));

            slides[slideIndex].classList.add('active');
            dots[slideIndex].classList.add('active');
        }