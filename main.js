import { SpeedInsights } from "@vercel/speed-insights/next"
function recarregar(){
    fetch('html.txt')
    .then(response => response.text())
    .then(text => {
        const array = text.split("\n");
        message = array[0]
        var count = `<b>${parseInt(array[1])}</b>`
        counter.innerHTML = message
        num.innerHTML = count
    })
}
recarregar()
var counter = document.getElementById('counter')
var message = ''
var num = document.getElementById('num')