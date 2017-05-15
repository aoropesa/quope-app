const quote = document.querySelector('.quote')
const doubleQuote = document.querySelector('.double-quote')
const author = document.querySelector('.author')
const button = document.querySelector('.quote-box button')
const body = document.querySelector('body')

const randomNum = function(){
  return Math.floor(Math.random()*10)
}
const randomColor = function() {
return `#${randomNum()}${randomNum()}${randomNum()}`
}

const getQuote = function() {
  $.ajax({
      headers: {
        "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
      success: function(response) {
        var res = JSON.parse(response);
        console.log(res);

        quote.textContent = res.quote
        author.textContent = res.author

        const color = randomColor()
        body.style.backgroundColor = color
        quote.style.color = color
        author.style.color = color
        button.style.backgroundColor = color
        doubleQuote.style.color= color
      }
    });
}
getQuote()
button.onclick = getQuote
