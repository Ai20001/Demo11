$(document).ready(function() {
    $('#upgrade-button').click(function() {
        $.post('/upgrade', function(data) {
            if (data.success) {
                $('#score').text(data.score);
                $('#upgrade-cost').text(data.upgrade_cost);
            } else {
                alert(data.message);
            }
        });
    });
});
