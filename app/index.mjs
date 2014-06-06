(require 'source-map-support').install ()

; routes
var home = (req, res) ->
  res.send '''
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>A good start</title>
    <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css">
  </head>
  <body>
    <div class="container">
    <h1 class="page-header">A good start</h1>
      <p>yay!</p>
    </div>
  </body>
</html>
'''

var app = (require 'express') ()
app.get ('/', home)

var server = (require 'http').create-server app
server.listen 8042
