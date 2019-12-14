
const qs = require('querystring')
const url = require('url')

module.exports = {

	serverHandle : function (req, res){

  const route = url.parse(req.url)
  const path = route.pathname 
  const params = qs.parse(route.query)

  //const queryParams = qs.parse(url.parse(req.url).query);
  //const path = url.parse(req.url).pathname;
  //console.log(queryParams); 

  // Write a response header
  res.writeHead(200, {'Content-Type': 'text/plain'});


  if(path === '/') {
    res.write('Hello \n In order to have Hello [name], \n on the Url, need to put : \n\n     http://localhost:8080/hello?name= \n and after the = put a name. \n If the name is deep, then you will have the information of Deep  ')
  } else {
      if(path === '/hello' && 'name' in params &&  params['name']=="deep") {
        res.write('My name is Deep.\n I am 21.\n Studying at ECE Paris')
      } else {
          if(path === '/hello' && 'name' in params) {
            res.write('Hello ' + params['name'])
          } else {
              res.write('Error 404')
            }
        }

    }

  //res.write(content);
  // Write a response content
  res.end();
}
}