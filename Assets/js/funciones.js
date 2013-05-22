
$(document).ready(function() {
	$(".fancybox").fancybox({
		openEffect : 'elastic',
		openSpeed  : 150,
		closeEffect : 'elastic',
		closeSpeed  : 150,
		closeClick : true,
		helpers : {
			title : {
				type : 'inside'
			}
		}
	});

	$('#text img').jcaption({
		wrapperElement: 'div',
		wrapperClass: 'caption',
		captionElement: 'p',
		imageAttr: 'alt',
		requireText: false,
		copyStyle: false,
		removeStyle: true,
		removeAlign: true,
		copyAlignmentToClass: false,
		copyFloatToClass: true,
		autoWidth: true,
		animate: false,
		show: {opacity: 'show'},
		showDuration: 200,
		hide: {opacity: 'hide'},
		hideDuration: 200
	});
	$('#sidebar img').jcaption({
		copyStyle: true,
		animate: true,
		show: {height: "show"},
		hide: {height: "hide"}
	});

    var uri = "http://api.worldweatheronline.com/free/v1/weather.ashx?q=Zacatecas&format=json&num_of_days=1&date=today&key=e54hg49k6fbnp5rqb4bs4bfs"
    var temp = ""
    $.get(uri, function(r,status)
    {
     temp = r.data.current_condition[0].temp_C;
     $('#temp').text(temp + '°C')
   }, "jsonp")

});

  /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
    var disqus_shortname = 'ljzbot2'; // required: replace example with your forum shortname

    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function () {
        var s = document.createElement('script'); s.async = true;
        s.type = 'text/javascript';
        s.src = '//' + disqus_shortname + '.disqus.com/count.js';
        (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
    }());