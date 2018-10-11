
let searchbtn = document.getElementById('searchbtn')
let inputbox = document.getElementById('inputbox')
let stock = document.getElementById('stock')
let price = document.getElementById('price')



searchbtn.addEventListener('click',function() {
setInterval(function(){for(let s in quotes ) {
    if (inputbox.value == s) {
      stock.innerHTML = `Stock: ${quotes[s].name}`
      price.innerHTML = `Price: ${getStockQuote(s).price}`
    }}}, 2000);
})
