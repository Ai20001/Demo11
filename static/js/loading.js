function showLoader() {
    var loaderImg = $('<img>').attr('src', '/static/images/loading.png').addClass('loader-img');
    $('#loader-container').append(loaderImg);
}

function hideLoader() {
    $('#loader-container').empty();
}
