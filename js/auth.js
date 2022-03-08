login.onsubmit = function(event){
    document.getElementById("loading").style.display = "block"

    event.preventDefault()
    if(login.btn_lg.innerHTML == "Login"    ){
        firebase.auth().signInWithEmailAndPassword(login.email.value, login.password.value).catch(function(error){
            console.log("Falha no acesso")
            console.log(error)
        })
    }

    else{
        firebase.auth().createUserWithEmailAndPassword(login.email.value, login.password.value).catch(function(error){
            console.log("Falha no cadastro")
            console.log(error)
        })
    }
}

firebase.auth().onAuthStateChanged(function(user){
    document.getElementById("loading").style.display = "none"
    
    if(user){
        console.log("Usuário autenticado")
        console.log(user)
    }
    else{
        console.log("Usuário não autenticado")
    }
})