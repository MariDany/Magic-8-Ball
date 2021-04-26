function shake(){
    let ball = document.getElementById('ball');
    let messageText = document.getElementById('message');

    if(messageText != null){
        messageText.parentNode.removeChild(messageText)
    }

    ball.classList.add('shake');
    
    setTimeout(function(){
        ball.classList.remove('shake');
    }, 1000);
    setTimeout(function(){
        getFortune();
    }, 1000)
}

function getFortune(){
    const fortunes = ['As I see it, yes', 'Ask again Later', 'Better not tell you now.','Cannot predict now.','Concentrate and ask again.','Don’t count on it.',' It is certain.','It is decidedly so.','Most likely.',' My reply is no.',' My sources say no.','Outlook not so good.','Outlook good.','Reply hazy, try again.','Signs point to yes.','Very doubtful.',' Without a doubt.',' Yes.','Yes – definitely.',' You may rely on it.'];

    let idx = Math.floor(Math.random()*21);

    let fortune = fortunes[idx];

    let parent = document.getElementById('fortune');
    let newMessage = document.createElement('div');
    newMessage.setAttribute('id','message');
    newMessage.innerHTML= "\""+fortune+"\""
    parent.appendChild(newMessage)
     
}