window.onload = function(){
    var reEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    var reName = /^[A-ZŠĐŽČĆ][a-zšđčćž]{2,11}(\s[A-ZŠĐŽČĆ][a-zšđčćž]{2,11})*$/;
    var reSubject = /(.{3})+/
    var reMessage = /(.{10})+/

var objName = document.querySelector("#name");
    objName.addEventListener("blur",function(){
        proveraRegularnihIzraza(reName,objName);
    })
var objEmail = document.querySelector("#email");
    objEmail.addEventListener("blur",function(){
        proveraRegularnihIzraza(reEmail,objEmail);
    })    
var objSubject = document.querySelector("#subject");
    objSubject.addEventListener("blur",function(){
        proveraRegularnihIzraza(reSubject,objSubject);
    })

    var objMessage = document.querySelector("#message");
    objMessage.addEventListener("blur",function(){
        proveraRegularnihIzraza(reMessage,objMessage);
    })
    var dugme = document.getElementById("btnSend");
    dugme.addEventListener("click", kontaktObrada);
    function kontaktObrada(){
        var greske = 0;
        greske += proveraRegularnihIzraza(reName,objName);
        greske += proveraRegularnihIzraza(reEmail,objEmail);
        greske += proveraRegularnihIzraza(reSubject,objSubject);
        greske += proveraRegularnihIzraza(reMessage,objMessage);
        
        if(!greske){
            dugme.nextElementSibling.classList.remove("sakrijUspesno");
            dugme.nextElementSibling.classList.add("uspesno");
        }
        else{
            dugme.nextElementSibling.classList.remove("uspesno");
            dugme.nextElementSibling.classList.add("sakrijUspesno");
        }
    }

}


function proveraRegularnihIzraza(re, obj){
    if(re.test(obj.value)){
        obj.nextElementSibling.classList.remove("prikaziGresku");
        obj.nextElementSibling.classList.add("sakrijGresku");
        return 0;
    }
    else{
        obj.nextElementSibling.classList.remove("sakrijGresku");
        obj.nextElementSibling.classList.add("prikaziGresku");
        return 1;
    }
    
}

