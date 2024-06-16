

function loadDiv(proj) {
    $(function(){
            $("#projectHeader").load('projects/'+ proj+'/header.html');
            $("#projectSummary").load('projects/'+ proj+'/projectSummary.html');
            $("#links").load('projects/'+ proj+'/links.html');
            $("#awards").load('projects/'+ proj+'/awards.html');
            document.getElementById("projectimg").src = 'projects/'+ proj+'/overview.jpg';
            //var urlParams = new URLSearchParams(window.location.search);
            //urlParams.set('page', proj);
            //history.replaceState(null, null, "?"+urlParams.toString());

      });
};



var urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('page')) {
    loadDiv(urlParams.get('page'));
}
