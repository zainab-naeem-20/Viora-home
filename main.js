AOS.init({
        duration: 1000,
        once: true
    });

    document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");
    
    if (preloader) {
        window.addEventListener("load", () => {
            setTimeout(() => {
                preloader.style.opacity = "0";
                setTimeout(() => {
                    preloader.style.display = "none";
                }, 500);
            }, 2000); 
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    // (Announcement Bar + Navbar)
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));

    // Footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
});