function loadDiv(htp) {
    $(function(){
        $("#DivContent").load(htp+'.html'); 
        $(".nav-active").removeClass("nav-active");
        $('.'+htp).addClass("nav-active");
      });
};

