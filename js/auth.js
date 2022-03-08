login.onsubmit = function(event){
    showItem(loading)

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
    hideItem(loading)

    if(user){
        showUser(user)
    }
    else{
        showAuth()
    }
})

function signOut(){
    firebase.auth().signOut().catch(function (error){
        console.log("Falha ao sair da conta")
        console.log(error) 
    })
}