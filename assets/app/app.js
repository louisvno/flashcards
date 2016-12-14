
function FlashcardController () {
    this.cards = [{
      "cardId" : "c001",
      "cardFront" : "to swim",
      "cardBack" : "nadar"
    },
    {
      "cardId" : "c002",
      "cardFront" : "to run",
      "cardBack" : "correr"
    },{
      "cardId" : "c003",
      "cardFront" : "to go",
      "cardBack" : "ir"
    }
    
    ];
    
    /* methods */
  
    this.selectCard = function (i) {
      this.cardIndex = i;
      return this.cards[i];
    };
    
    this.setCurrentSide = function (cardSide) {
        this.currentSide = cardSide; 
    };
    
    this.setCardDisplay = function (cardSide) {
      this.setCurrentSide(cardSide);
      this.cardDisplay = this.selectedCard[cardSide];
    };
    
    this.flipCard = function(){
      if ( this.currentSide === "cardFront"){
        this.setCardDisplay("cardBack");
      } else if ( this.currentSide === "cardBack"){
        this.setCardDisplay ("cardFront");
      }
    }
    
    this.nextCard = function(){
     var nextIndex = this.cardIndex+1;
     if(nextIndex < this.cards.length) { 
       
       this.selectedCard = this.selectCard(nextIndex);
       this.setCardDisplay(this.initCardMode );
     }
    }
    
    /*init app */
    this.initCardMode = "cardFront"; //NOTE could be made adjustable
    this.currentSide = this.initCardMode;
    this.cardIndex = 0;
    this.selectedCard = this.selectCard(this.cardIndex);
    this.setCardDisplay(this.initCardMode);
    
};

angular
  .module('flashcardApp', [])
  .controller('FlashcardController', FlashcardController);