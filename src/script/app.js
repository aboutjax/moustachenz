$.ajax({
  type: "GET",
  dataType: "jsonp",
	cache: false,
  url: "https://api.instagram.com/v1/tags/moustachenz/media/recent?access_token=401851.1fb234f.918590524c4846daa56ee4e3d654c4e1",
  success: function(data) {
    for (var i = 0; i < 120; i++) {
      $(".mo-popular").append("<a class='mo-post' target='_blank' href='" + data.data[i].link + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a>");
    }
  }
});

$.ajax({
  type: "GET",
  dataType: "json",
	cache: false,
  url: "https://sheetsu.com/apis/v1.0/6ff573d5",
  success: function(times) {
    for (var i = 0; i < times.length; i++) {
      var time = times[i]
      $(".mo-homepage-hours-container").append("<table class='mo-homepage-hours-table'><tr><th colspan='2' class='mo-table-header'>" + time.location + "</tr><tr class='mo-homepage-hours-row'><td>" + time.days + "</td><td class='mo-homepage-hours-time'>" + time.hours + "</td></tr><tr class='mo-homepage-hours-row'><td>" + time.days2 + "</td><td class='mo-homepage-hours-time'>" + time.hours2 + "</td></tr></table>");
    }
    console.log(times)
  }
});

// setTimeout('window.location.reload();', 30000);
//
//
// <tr>
//   <th colspan="2" class="mo-table-header">Lynn Mall Brickworks</th>
// </tr>
// <tr class="mo-homepage-hours-row">
//   <td>Mon - Thu</td>
//   <td class="mo-homepage-hours-time">9am - 9pm</td>
// </tr>
