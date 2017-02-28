/*------------------------------------------------------------------
Project:    Oneline
Author:     Gabriel Lantz
Version:    1.0
Created:    2016-06-03
Updated:    2016-06-03
-------------------------------------------------------------------*/

$('a').each(function() {
  var link = $(this);
  link.click(function() {
    if (!this.getAttribute('href').startsWith('#')) {
      goToRoute(this.href);
      return false;
    }
  });
});

function goToRoute(url) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'document';
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      if (xhr.status === 200) {
        var response = xhr.responseXML;
        var title = $(response).find('title').text();
        var scripts = [];
        $(response).find('body script').each(function() {
          $(this).remove();
          scripts.push(this.src);
          // console.log('Removed script: ', this.src);
        });
        var bodyHtml = $(response).find('body').html();
        $('body').html(bodyHtml);
        $.each(scripts, function(index, src) {
          if (!~src.indexOf('jquery') && !~src.indexOf('bootstrap')) { 
            $.getScript(src, function() {}); 
            // console.log('Added script: ', src);
          }
        });
        document.getElementsByTagName('title')[0].innerHTML = title;
        history.pushState({}, title, url);
      } else {
        alert('Request failed. Returned status of ' + xhr.status);
      }
    }
  };
  xhr.send();
}

/*
function goToRoute(url) {
  $.ajax({
    type: 'GET',
    url: url,
    data: $.param({ajax: true})
  })
  .done(function(response) {
    var bodyHtml = $(response).find('.wrapper').html();
    $('body').html(response);
    // console.log(response);
  })
  .error(function(response) {
    console.log('Request failed. Returned status of ' + JSON.stringify(response.responseText));
  });
}
*/

// document.getElementsByTagName('body')[0].innerHTML = resDoc.getElementsByTagName('body')[0].innerHTML;
// console.log($('script')[3].src);
// $('body script').each(function() {
//   $(this).remove();
//   $('body').append('<script type="text/javascript" src="' + this.src + '"></script>');
//   console.log(this.src);
// });
// history.replaceState({}, title, url);