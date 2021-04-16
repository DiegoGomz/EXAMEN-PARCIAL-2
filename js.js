

document.querySelector("#GENERAR1").addEventListener("click",STRINGA);

function PASO()
{
    let jsonstring = document.querySelector("#PRODUCTO").value;
    let objeto =  JSON.parse(jsonstring);

    document.querySelector("#quotetext").value = objeto.quotetext;
    document.querySelector("#quoteauthor").value = objeto.quoteauthor;
    document.querySelector("#sendername").value = objeto.sendername;
    document.querySelector("#senderlink").value = objeto.senderlink;
    document.querySelector("#quotelink").value = objeto.quotelink;

   
    console.log(objeto);
}

document.querySelector("#LLENAR2").addEventListener("click",PASO);


function STRINGA(){

    var TRANSFORMARJ = '{"quoteText": "Let us be grateful to people who make us happy; they are the charming gardeners who make our souls blossom.", "quoteAuthor" : "Marcel Proust" , "senderName" : "-" , "senderLink" : "-" , "quoteLink" :"http://forismatic.com/en/3fe08c5b2e/"}';
    var TRANSFORMAR = JSON.parse(TRANSFORMARJ);
        console.log(TRANSFORMAR);

        document.querySelector("#PRODUCTO").value = TRANSFORMAR.quoteText +  " " +  TRANSFORMAR.quoteAuthor + " " + TRANSFORMAR.senderName + " " + TRANSFORMAR.senderLink + " " + TRANSFORMAR.quoteLink;
    
  }
  document.querySelector("#GENERAR1").addEventListener("click",STRINGA);