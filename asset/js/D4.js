/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1,l2){
let a = l1 * l2  
return a
}
console.log(area(4,6))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(n1,n2){
    let sum1 = 0
    if (n1 !== n2){
    sum1 = n1+n2 }
    else{
        sum1 = (n1+n2)*3
    }
    return sum1
    }
    console.log(crazySum(4,4))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
function crazyDiff (n3)
{
    let diff = 0
    diff = n3 - 19
    if(diff<0){
        diff = Math.abs(diff)
    }
    return diff

}
console.log(crazyDiff(15))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
function boundary (n4){
    let b;
    if(n4>20 && n4 <= 100 || n4 === 400)
    {
        b = true
    }
    else{
        b = false
    }
    return b;
}
console.log(boundary(400))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/


function epify(stringa){
    let mystr = stringa;
    if(mystr.indexOf(0) !== 'epicode'){
        return 'Epicode '  + mystr
    }
    else{
        return mystr
    }


}console.log(epify('epicode ciao a tutti'))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
function check3and7 (n5){
    let c = n5 ;
    if (c % 3 == 0 || c % 7 ==  0)
    {
        return true
    }
    else{
        return false
    }
}
console.log(check3and7(14))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
function reverseString(str){
    const stringa = str.split('').reverse().join('');
    return stringa
}
console.log(reverseString('ciao'))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
function upperFirst(str1){
    let mystr1 =  str1.split(' ')
    let mystr2 
    for  (let i = 0; i < mystr1.lenght; i++)
    {
      mystr2 = mystr1[i].charAt(0).toUpperCase()


    }
    return mystr2
}

console.log(upperFirst('ciao mi chiamo nicolas'))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
function giveMeRandom (n6){
    let casualNumber = []
    for (let i = 0; i < n6; i++){
        casualNumber.push(Math.floor(Math.random()) *  11)
    }
    return casualNumber
}
console.log(giveMeRandom(7))
/* SCRIVI QUI LA TUA RISPOSTA */
