#!/usr/bin/python
import re
import time

import data

html = open("statistik.html", "w")
javascript = ['		<script>']
javaconf = []

def graph(word, text):
	dataori = text	
	data = []
	for z in dataori:
		if z not in data and not z == '\n' and z[:z.index(":")] == word:
			data.append(z)
	
	size = []
	for a in data:
		find = re.findall(".*: (.*?) date:", a)
		size.append(int(''.join(find)))

	if len(size) >= 2:
	
		html.write('		<h1>' + word + '</h1>\n')
		html.write('		<div style="width:60%">\n')
		html.write('			<div>\n')
		html.write('				<canvas id="%s" height="450" width="600"></canvas>\n' % word)
		html.write('			</div>\n')
		html.write('		</div>\n')
		html.write('\n')

		javascript.append( '			var randomScalingFactor = function(){ return Math.round(Math.random()*100)};')
		javascript.append( '			var lineChartData%s = {' % word )
		javascript.append( '				labels : %s,' % (date(word, text)) )
		javascript.append( '				datasets : [' )
		javascript.append( '					{' )
		javascript.append( '						label: "%s",' % word )
		javascript.append( '						fillColor : "rgba(151,187,205,0.2)",' )
		javascript.append( '						strokeColor : "rgba(151,187,205,1)",' )
		javascript.append( '						pointColor : "rgba(151,187,205,1)",' )
		javascript.append( '						pointStrokeColor : "#fff",' )
		javascript.append( '						pointHighlightFill : "#fff",' )
		javascript.append( '						pointHighlightStroke : "rgba(151,187,205,1)",' )
		javascript.append( '						data : %s' % ''.join(str(size)) )
		javascript.append( '					}' )
		javascript.append( '				]' )
		javascript.append( '			}' )
		javascript.append( '' )

		javaconf.append( '				var ctx%s = document.getElementById("%s").getContext("2d");' % (word, word) )
		javaconf.append( '				window.myLine%s = new Chart(ctx%s).Line(lineChartData%s, {' % (word, word, word) )
		javaconf.append( '				responsive: true });' )
		

def date(word, text):
	nown = []
	end = []

	for txt in text:
		line = txt[:txt.index(":")]
		if line == word and txt not in nown:
			end.append(txt[-10:])
			nown.append(txt)
	
	return end

def main():
	text = data.main()
	words = []
	
	for line in text:
		if not line[:line.index(":")] in words:
			words.append(line[:line.index(":")])

	html.write('<!doctype html>\n')
	html.write('<html>\n')
	html.write('	<head>\n')
	html.write('		<title>News Monitor</title>\n')
	html.write('		<script src="./Chart.js"></script>\n')
	html.write('</head>\n')
	html.write('<body>\n')
	html.write('\n')
	html.write('		<div>' + time.strftime('%H:%M %d.%m.%Y') + '</div>\n')

	words = ["Merkel", "Obama", "Ukraine", "Staat",
			 "Russland", "Kiew", "Europa", "Krise", 
			 "Kurden", "Polizei", "Kampf"]

	for w in words:
		graph(w, text)

	javascript.append( '			window.onload = function(){')
	
	for conf in javaconf:
		javascript.append(conf)
	
	javascript.append( '			}' )
	javascript.append( '		</script>' )	

	for java in javascript:
		html.write(java + '\n')
	
	html.write("</body>\n")
	html.write("</html>\n")

main()