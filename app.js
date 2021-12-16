const http = require('http')

const server = http.createServer( (req,res) => {
	if(req.url === '/') {
		res.write('Hello World!')
		res.end()
	}
	if(req.url === '/api/courses') {
		res.write(JSON.stringify( ["Node.js", "Django", "Rails", "Elixr", "GO"]))
		res.end()
	}
})

server.listen(3000)

console.log('Listening on port 3000...')

