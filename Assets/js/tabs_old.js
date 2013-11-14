window.onload=function() {

  // get tab container
  	var container = document.getElementById("tabContainer");
		var tabcon = document.getElementById("tabscontent");
		//alert(tabcon.childNodes.item(1));
    // set current tab
    var navitem = document.getElementById("tabHeader_1");
		
    //store which tab we are on
    var ident = navitem.id.split("_")[1];
		//alert(ident);
    navitem.parentNode.setAttribute("data-current",ident);
    //set current tab with class of activetabheader
    navitem.setAttribute("class","tabActiveHeader");

    //hide two tab contents we don't need
   	 var pages = tabcon.getElementsByTagName("div");
    	for (var i = 1; i < pages.length; i++) {
     	 pages.item(i).style.display="none";
		};

    //this adds click event to tabs
    var tabs = container.getElementsByTagName("li");
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].onclick=displayPage;
    }
}

// on click of one of tabs
function displayPage() {
  var current = this.parentNode.getAttribute("data-current");
  var current_tab_element = document.getElementById("tabpage_" + current);
  //remove class of activetabheader and hide old contents
  document.getElementById("tabHeader_" + current).removeAttribute("class");
  current_tab_element.style.display="none";
  
  var ident = this.id.split("_")[1];
  var selected_tab = document.getElementById("tabpage_" + ident);
  //add class of activetabheader to new active tab and show contents
  this.setAttribute("class","tabActiveHeader");
	 selected_tab.style.display="block";

	 if(selected_tab.getAttribute('featured_video'))
	     loadVideo(selected_tab.getAttribute('featured_video'), false);

  this.parentNode.setAttribute("data-current",ident);
}