window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    
    // Set the delay in milliseconds (e.g., 2000ms = 2 seconds)
    const delay = 5000; // Adjust the delay time as needed
    
    setTimeout(function() {
        preloader.style.display = 'none';
    }, delay);
});
