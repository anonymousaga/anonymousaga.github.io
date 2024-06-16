function loadDiv(htp) {
    $(function(){
            var urlParams = new URLSearchParams(window.location.search);
            $("#DivContent").load(htp+'.html'); 
            $(".nav-active").removeClass("nav-active");
            $('.'+htp).addClass("nav-active");
            urlParams.set('page', htp);
            history.replaceState(null, null, "?"+urlParams.toString());

      });
};



var urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('page')) {
    loadDiv(urlParams.get('page'));
} else {
    loadDiv('main')
}

