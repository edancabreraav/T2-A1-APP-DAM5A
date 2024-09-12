function MyFetchAPIs() {
  function fcnXMLHttpRequest() {
    // console.log('¡Hola Mundo!')

    var request = new XMLHttpRequest();

    request.open("GET", "https://reqres.in/api/users", true);

    request.send(null);

    return new Promise(function(resolve, reject){
      request.onreadystatechange = function (state) {
        if (request.readyState === 4) {
          var resp = request.response;
          var respObj = JSON.parse(resp);
          console.log(respObj.data);
        }
        // console.log(request)
      };

    })
  }

  function fcnFetchRequest() {
    console.log("¡Execute GET API by Fetch!");
    //Función Fetch 
    fetch('https://reqres.in/api/users')
        
    .then(resp => resp.json())
    .then(respObj => {
            console.log("Response Fetch:",respObj.data);
    });
};

fcnXMLHttpRequest().then((response) => {
  console.log("Respuesta XMLHttp: ", response);
});
fcnFetchRequest();

  return (
    <>
      <div>
        <h1>Programa para FETCH APISs</h1>
      </div>
    </>
  );
}

export default MyFetchAPIs;
