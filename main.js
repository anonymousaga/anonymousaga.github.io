function loadDiv(htp) {
    $(function(){
        $("#DivContent").load(htp+'.html'); 
        $(".nav-active").removeClass("nav-active");
        $('.'+htp).addClass("nav-active");
      });
};



const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('page')) {
    loadDiv(urlParams.get('page'));
} else {
    loadDiv('main')
}
