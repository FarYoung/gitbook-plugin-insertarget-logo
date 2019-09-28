require(['gitbook', 'jQuery'], function(gitbook, $) {
  var url = ''
  var src = ''
  var style = ''
  var insertLogo = function(url, src, style) {
    $('.book-summary').children().eq(0).before('<div class="book-logo"><a href="' + url + '" target="_blank"><img src="' + src + '" style="' + style + '"></a></div>')
  }
  gitbook.events.bind('start', function(e, config) {
    url = config['insertarget-logo']['url']
    src = config['insertarget-logo']['src']
    style = config['insertarget-logo']['style']
  })

  gitbook.events.bind("page.change", function() {
    insertLogo(url, src, style)
  })
})
