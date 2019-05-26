** the application will render a booster pack from the most recent set of mtg **
** the user will choose one card and store that card in the so-called 'deck' **
** upon choosing a card, the app will render a new booster pack **
** this process will continue until the deck has 40 cards **

** what this needs:
    * Backend rails-api for individual card data
        * When a card is selected, a call will be made to a fetch(post) to add the card to the database, adding the card as being owned by the deck
        * When a deck is deleted -- another draft started -- the current deck will be deleted as well as all held cards.
        * This will be done to add viewing functionality -- a later feature.
    * Redux for individual card additions to the deck
    * All the actions to have the states updated
    * state mapped to props for the containers down to the components
            
