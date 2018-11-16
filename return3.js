$( document ).ready(function() {
    $.post("https://api.idex.market/returnTicker",
    {
        market: 'ETH_WTC'
    },
    function(data, status){
    alert("Data: " + data +  "\nStatus: " + status);
        
    console.log(data);

      var dataContent = document.createElement("p");
      dataContent.innerHTML = "<h3>Last</h3> "+data.last+" <h3>High</h3> "+data.high + " <h3>low</h3> "+data.low+" <h3>lowest Ask </h3>"+data.lowestAsk+"<h3>Highest Bid</h3> "+data.highestBid  ;  
      $("#content").append(dataContent);
    });
});