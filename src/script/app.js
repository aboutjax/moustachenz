// $.ajax({
//   type: "GET",
//   dataType: "jsonp",
// 	cache: false,
//   url: "https://api.instagram.com/v1/tags/moustachenz/media/recent?access_token=401851.fd162e7.00fcbf8111894411aa34a78a0a41729f",
//   success: function(data) {
//     for (var i = 0; i < 120; i++) {
//       $(".mo-popular").append("<a class='mo-post' target='_blank' href='" + data.data[i].link + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a>");
//     }
//   }
// });

$.ajax({
  type: "GET",
  dataType: "json",
	cache: false,
  url: "/src/script/hours.js",
  success: function(times) {
    for (var i = 0; i < times.length; i++) {
      var time = times[i]
      $(".mo-homepage-hours-container").append("<table class='mo-homepage-hours-table'><tr><th colspan='2' class='mo-table-header'>" + time.location + "</tr><tr class='mo-homepage-hours-row'><td>" + time.days + "</td><td class='mo-homepage-hours-time'>" + time.hours + "</td></tr><tr class='mo-homepage-hours-row'><td>" + time.days2 + "</td><td class='mo-homepage-hours-time'>" + time.hours2 + "</td></tr></table>");
    }
  }
});
