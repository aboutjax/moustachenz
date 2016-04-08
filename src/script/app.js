$.ajax({
  type: "GET",
  dataType: "jsonp",
	cache: false,
  url: "https://api.instagram.com/v1/tags/moustachenz/media/recent?access_token=401851.1fb234f.918590524c4846daa56ee4e3d654c4e1",
  success: function(data) {
    for (var i = 0; i < 120; i++) {
      $(".popular").append("<a class='post' target='_blank' href='" + data.data[i].link + "'><img class='post' src='" + data.data[i].images.low_resolution.url +"'></img></a>");
    }
  }
});

setTimeout('window.location.reload();', 30000);
