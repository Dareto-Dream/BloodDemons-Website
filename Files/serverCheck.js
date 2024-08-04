var url = 'https://api.minetools.eu/ping/daretodream.zapto.org';
var storedText;

fetch(url)
  .then(function(response) {
    response.text().then(function(text) {
      storedText = text;
      serverArray = "[ \n" + serverArray + "\n ]"
      var serverArray = JSON.parse(storedText);
      console.table(serverArray);
    });
  });

