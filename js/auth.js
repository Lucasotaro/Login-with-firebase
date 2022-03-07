login.onsubmit = function(event){
    event.preventDefault()
    if(login.btn_lg.innerHTML == "Login"){
        firebase.auth().signInWithEmailAndPassword(login.email.value, login.password.value).then(function(user){
            console.log("Acessou com sucesso")
            console.log(user)
        }).catch(function(error){
            console.log("Falha no acesso")
            console.log(error)
        })
    }

    else{
        firebase.auth().createUserWithEmailAndPassword(login.email.value, login.password.value).then(function(user){
            console.log("Cadastrou com sucesso")
            console.log(user)
        }).catch(function(error){
            console.log("Falha no cadastro")
            console.log(error)
        })
    }
}