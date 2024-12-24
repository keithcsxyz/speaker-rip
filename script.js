var makeItRain = function() {
    // Clear out everything
    $('.rain').empty();

    var increment = 0;
    var drops = "";
    var backDrops = "";

    while (increment < 100) {
        // Random numbers for various randomizations
        var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
        var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));

        increment += randoFiver;

        // Add raindrop HTML with randomizations
        drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;">' +
                 '<div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div>' +
                 '<div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div>' +
                 '</div>';
        
        backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;">' +
                     '<div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div>' +
                     '<div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div>' +
                     '</div>';
    }

    // Append drops to the respective rain containers
    $('.rain.front-row').append(drops);
    $('.rain.back-row').append(backDrops);
}

// Always trigger the rain effect on page load
makeItRain();


document.querySelector('.give-flowers-btn').addEventListener('click', function() {
    const flowerContainer = document.getElementById('flowerContainer');

    for (let i = 0; i < 10; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.textContent = '🌸'; // You can change this to any emoji or image
        
        // Randomize the position and size of the flower
        flower.style.left = `${Math.random() * 100}%`;
        flower.style.top = `${Math.random() * 100}%`;
        flower.style.fontSize = `${Math.random() * 2 + 1}rem`;
        
        flowerContainer.appendChild(flower);

        // Remove the flower after the animation
        setTimeout(() => {
            flower.remove();
        }, 3000);
    }
});
