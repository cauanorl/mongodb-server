function index(request, response) {
   response.render('index', {
      title: 'Página inicial'
   })
}

module.exports = {
   index
}