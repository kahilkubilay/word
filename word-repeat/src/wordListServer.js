var http = require('http');
var fs = require('fs');

function wordListener(request, response){
    
    if(request.url === '/'){
        console.log(request);
        response.writeHeader(200, {
            'Context-Type': 'text-plain',
        });
    
        var dd = '<html><body><h1>Bilgisayar kavramlari</h1></body></html>';
    
        response.write(dd);
        response.end();
    }else{
        response.writeHeader(404, {
            'Context-Type': 'text-plain',
        });
        response.write('hatali sayfa');
        response.end();
    }
    
    
  
}

http.createServer(wordListener).listen(8000);