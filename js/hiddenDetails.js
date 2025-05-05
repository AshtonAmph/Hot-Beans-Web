function togglejobopenings(jobopeningsElement) {
    event.stopPropagation();
    var allInfos = document.querySelectorAll('.jobinfo');
    allInfos.forEach(function(info) {
        if (info !== jobopeningsElement.querySelector('.jobinfo')) {
            info.style.display = "none";
        }
    });
    var info = jobopeningsElement.querySelector('.jobinfo');
    if (info.style.display === "none" || info.style.display === "") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}
document.addEventListener('click', function() {
    var allInfos = document.querySelectorAll('.jobinfo');
    allInfos.forEach(function(info) {
        info.style.display = "none";
    });
});