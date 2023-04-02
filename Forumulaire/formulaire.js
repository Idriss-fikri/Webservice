const user = {
    nom: '',
    prenom: '',
    age: '',
    email: ''
  };
  


function Affichage(){ 

    myformulaire=document.getElementById('formulaire');
    results=document.getElementById('resultat')

    myformulaire.addEventListener('click', function(event) {
    event.preventDefault(); /*indique à utilisateur que si l'évènement n'est pas explicitement géré, l'action par défaut ne devrait pas être exécutée comme elle l'est normalement.*/
    user.nom=nom.value;
    user.prenom=prenom.value;
    user.age=age.value;
    user.email=email.value;
    results.innerHTML = `Nom: ${user.nom} <br> Prenom: ${user.prenom} <br> Age : ${user.age} <br> Email : ${user.email}`;

    }
    )};

function Vider(){
    user.prenom=""
    user.nom=""
    user.age=""
    user.email=""
    document.location.reload(); /* reload ma page */

}

function SaveStorage(){
    /* creation d'un autre objet user */
    const user1  = {
        nom: nom.value,
        prenom: prenom.value,
        age : age.value,
        email: email.value  
    } 
    const Castuser= JSON.stringify(user1);
    /*obliger de caster  un objet en string car localstroagesetitem ne prend pas dobjet elle prend que des strings */

    localStorage.setItem("User" , Castuser);
}

function LoadShowStorage(){
    res=document.getElementById('ShowStorage');
    const CastStringUser=JSON.parse(localStorage.getItem("User")); 
    /*cast de string en objet */
    res.innerHTML = `Les informations de local storage sont : <br>  Nom : ${CastStringUser.nom} <br>  Prenom : ${CastStringUser.prenom} <br>  Age : ${CastStringUser.age} <br>  Email : ${CastStringUser.email}`;

};

/*local storage permet de stocker nos  donnés dans notre navigatueer sans toucher au cache
les donne sont stocké indefinemment meme si en ferme notre navigateur nos donéées sont toujours
la
les 3 fonctions connus :   localstorage.setitem(clé,valeur)==>enregistre une valeur  dans le storag    
localstorage.getitem(clé)==>recureme la clé  qui est stocké dans le sotrag
localsotrage.clear()==>efface le storage
*/