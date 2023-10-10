let compteur = 0;

    document.getElementById("Decrease").addEventListener('click',doDecrease);
   document.getElementById("Increase").addEventListener('click',doIncrease);
   document.getElementById("Reset").addEventListener('click',doReset);

   function changeColor() {
    if (compteur > 0) {
        document.getElementById("counter").style.color = "green";
    }

    else if (compteur < 0) {
        document.getElementById("counter").style.color = "red";
      }
    else if  (compteur == 0) {
         document.getElementById("counter").style.color = "black";
     }
   }


   function doIncrease () {
    compteur = compteur + 1;
    changeColor();
    //if (compteur > 0) {
        //document.getElementById("counter").style.color = "green";
     //}
        document.getElementById("counter").innerHTML = compteur;
    }
    //doIncrease(); si je mets cette fonction sur le code elle va se déclencher 
    //toute seule puisqu'on l'a appelée, mais il faut mettre lees documents appelés en haut en commentaire ou on les met pas
    //il va commencé de +1 pas 0

    function doDecrease() {
    compteur = compteur - 1;
    changeColor();
    //je dois verifier si la valeur compteur est inferieur à zéro
      //if (compteur < 0) {
      // document.getElementById("counter").style.color = "red";
    // }
    document.getElementById("counter").innerHTML = compteur;
    }  
    function doReset () {
        compteur = 0;
        changeColor();//il faut toujours la fonction qu'on a appelé
        
    //if  (compteur == 0) {
           // document.getElementById("counter").style.color = "black";
         //}
        document.getElementById("counter").innerHTML = compteur;
    }