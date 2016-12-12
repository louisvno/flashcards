//Our application will always have a single app module as we can import other modules, so we'll call the main module app when we set it (create it). An AngularJS module defines an application.The module is a container for the different parts of an application.
//The Array [] as the second argument to the module method contains (or will contain) all other module dependencies we wish to include in this module. Modules can have other modules as dependencies, which have modules that pull in other dependencies. For now, we'll leave it empty.
//store the module as a variable


//$scope makes variable available for angular controller Think of $scope as an automated bridge between JavaScript and the DOM itself which holds our synchronised data. This allows us to template easier using handlebars syntax inside the HTML we love, and Angular will render out the associated $scope values. This creates a binding between JavaScript and the DOM, the $scope Object is really a glorified ViewModel.

//We only use $scope inside Controllers, where we bind data from the Controller to the View. 
//To render it out in the DOM, we need to connect a Controller to some HTML (with directives) and tell Angular where to bind the value.

//We've already had a glimpse of Controllers above by declaring the ng-controller attribute to display $scope data. This attribute simply tells Angular where to scope and bind an instance of a Controller and make the Controller's data and methods be available in that DOM scope.

//controller follow PascalCase
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
    }];
    
    this.initCardMode = "cardFront";
    this.currentSide = this.initCardMode;
    
    this.setCurrentSide = function (cardSide) {
        this.currentSide = cardSide; 
    };
    
    this.setCardContent = function (cardSide) {
      this.setCurrentSide(cardSide);
      return this.cards[0][cardSide];
    };
    
    this.cardContent = this.setCardContent(this.initCardMode);
    
    this.flipCard = function(){
      if ( this.currentSide === "cardFront"){
        this.cardContent = this.setCardContent ("cardBack");
        console.log("f2b");
      } else if ( this.currentSide === "cardBack"){
        this.cardContent = this.setCardContent ("cardFront");
      }
    }
    
    //TODO go to next card
};

//A Controller accepts two arguments, the first the Controller's name, to be referenced elsewhere such as the DOM, and the second a callback function. This callback shouldn't be treated as a callback, however, it's more a declaration of the Controller's body.

//Two way data-binding is a very simple concept which provides synchronisation between Model and View layers. Model changes propagate to the View, and View changes are instantly reflected back to the Model. This makes the Model the "single source of truth" for maintaining the applications state.

angular
  .module('flashcardApp', [])
  .controller('FlashcardController', FlashcardController);