/*!
  * Bootstrap v4.5.2 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
$(window).scroll((function(){$(".navbar").offset().top>200?$(".navbar-fixed-top").addClass("top-nav-collapse"):$(".navbar-fixed-top").removeClass("top-nav-collapse")})),$((function(){$("a.page-scroll").bind("click",(function(event){var $anchor=$(this);$("html, body").stop().animate({scrollTop:$($anchor.attr("href")).offset().top},1500,"easeInOutExpo"),event.preventDefault()}))})),$(".navbar-collapse ul li a").click((function(){$(".navbar-toggle:visible").click()}));