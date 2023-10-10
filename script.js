let compteur = 0;

    document.getElementById("Decrease").addEventListener('click',doDecrease);
   document.getElementById("Increase").addEventListener('click',doIncrease);
   document.getElementById("Reset").addEventListener('click',doReset);

   function doIncrease () {
    compteur = compteur + 1;
        document.getElementById("counter").innerHTML = compteur;
    }
    //doIncrease(); si je mets cette fonction sur le code elle va se déclencher 
    //toute seule puisqu'on l'a appelée, mais il faut mettre lees documents appelés en haut en commentaire ou on les met pas
    //il va commencé de +1 pas 0

    function doDecrease() {
    compteur = compteur - 1;
    document.getElementById("counter").innerHTML = compteur;
    }  
    function doReset () {
        compteur = 0;
        document.getElementById("counter").innerHTML = compteur;
    }