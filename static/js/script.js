$(document).ready(function() {
    $('#click-img').click(function(event) {
        var score = parseInt($('#score').text());
        score += 1; // Increment score by 1
        $('#score').text(score);
        spawnCoin(event.pageX, event.pageY);
    });

    function spawnCoin(x, y) {
        var $coin = $('<div class="coin"></div>').appendTo('#coin-container');
        $coin.css({
            left: x - 15 + 'px',
            top: y - 15 + 'px'
        });

        setTimeout(function() {
            $coin.remove();
        }, 1000);
    }
});
