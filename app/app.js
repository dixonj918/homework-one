function initURLListerner(){
    $(window).on("hashchange", changeRoute);
    changeRoute();
}

$(document).ready(function(){
    initURLListerner()
})