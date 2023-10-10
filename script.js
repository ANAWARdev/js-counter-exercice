let compteur = 0;

    document.getElementById("Decrease").addEventListener('click',doDecrease);
   document.getElementById("Increase").addEventListener('click',doIncrease);
   document.getElementById("Reset").addEventListener('click',doReset);

   function doIncrease () {
    compteur = compteur + 1;
        document.getElementById("counter").innerHTML = compteur;
    }
    function doDecrease() {
    compteur = compteur - 1;
    document.getElementById("counter").innerHTML = compteur;
    }  
    function doReset () {
        compteur = 0;
        document.getElementById("counter").innerHTML = compteur;
    }