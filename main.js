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