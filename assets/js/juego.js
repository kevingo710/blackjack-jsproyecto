/**
 * 2C = Two of Clubs (Treboles);
 * 2D = Two of Diamonds (Diamantes);
 * 2S = Two of Swords (Espadas);
 * 2H = Two of Heartss (Corazon);
 * 
 */


 let deck = [];
 const tipos = ['C','D','S','H'];
 const especiales = ['A','J','Q','K'];

//esta funcion crear una nueva baraja
 const crearDeck = () => {


    for(let i = 2 ; i<= 10; i++){
        for(let tipo of tipos ){
            deck.push(i + tipo);
        }

    }

    for (const tipo of tipos) {
        for (let especial of especiales) {
            deck.push(especial+tipo);
        }    
    }
    //console.log(deck);
    deck = (_.shuffle(deck)); //importada desde underscore desordenar el arreglo
    console.log((deck));
    return deck;
 };


//Funcion para tomar una carta
const pedirCarta = () => {

    if (deck.length === 0) {
        throw 'No hay cartas en el mazo';
        
    }
    const carta = deck.pop(); //quitando la ultima carta de la baraja
    console.log(deck);
    console.log(carta);
    return carta;

}

 crearDeck();
//  pedirCarta();



//Ver el valor de la carta generada
const valorCarta = ( carta ) => {

    let valor = carta.substring(0,carta.length-1);//extraer desde 0 hasta antes del ultimo elemento


    valor =     ( isNaN (valor)) ? 
                ((valor === 'A' ) ? 11 : 10) :
                 valor *1 ;

    console.log(valor);

}
valorCarta(pedirCarta());
