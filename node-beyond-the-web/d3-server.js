// Start `node d3-server.js`
// Then visit http://localhost:1337/
//
var d3   = require('d3'),
    http = require('http')

http.createServer(function (req, res) {
  // Chrome automatically sends a requests for favicons
  // Looks like https://code.google.com/p/chromium/issues/detail?id=39402 isn't
  // fixed or this is a regression.
  if(req.url.indexOf('favicon.ico') != -1) {
    res.statusCode = 404
    return
  }

  var pad     = { t: 10, r: 10, b: 50, l: 40 },
      width   = 800 - pad.l - pad.r,
      height  = 500 - pad.t - pad.b,
      samples = d3.range(10).map(d3.random.normal(10, 5)),
      x       = d3.scale.linear().domain([0, samples.length - 1]).range([0, width]),
      y       = d3.scale.linear().domain([0, d3.max(samples)]).range([height, 0]),
      xAxis   = d3.svg.axis().scale(x).orient('bottom').tickSize(height),
      yAxis   = d3.svg.axis().scale(y).orient('left')

  var line = d3.svg.line()
      .interpolate('basis')
      .x(function(d, i) { return x(i) })
      .y(y)

  var vis = d3.select('body').html('').append('svg')
    .attr('xmlns', 'http://www.w3.org/2000/svg')
    .attr('xmlns:xlink', 'http://www.w3.org/1999/xlink')
    .attr('width', width + pad.l + pad.r)
    .attr('height', height + pad.t + pad.b)
    .append('g')
    .attr('transform', 'translate(' + pad.l + ',' + pad.t + ')')

  vis.append('g')
    .attr('class', 'x axis')
    .call(xAxis)

  vis.append('g')
    .attr('class', 'y axis')
    .call(yAxis)

  vis.selectAll('.axis text')
    .style('fill', '#888')
    .style('font-family', 'Helvetica Neue')
    .style('font-size', 11)

  vis.selectAll('.axis line')
    .style('stroke', '#eee')
    .style('stroke-width', 1)

  vis.selectAll('.domain')
    .style('display', 'none')

  vis.selectAll('path.samples')
    .data([samples])
    .enter().append('path')
    .attr('class', 'samples')
    .attr('d', line)
    .style('fill', 'none')
    .style('stroke', '#c00')
    .style('stroke-width', 2)

  res.writeHead(200, {'Content-Type': 'image/svg+xml'})
  res.end(d3.select('body').node().innerHTML)
}).listen(1337, '127.0.0.1')

console.log('Server running at http://127.0.0.1:1337/');
