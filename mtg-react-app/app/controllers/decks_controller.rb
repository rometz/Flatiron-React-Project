class DecksController < ApplicationController
    def index
        @decks = Deck.all
        render json: @decks
    end

    def show
        @deck = Deck.find(params[:id])
        render json: @deck
    end

    def create
        @deck = Deck.create(deck_params)
        render json: @deck
    end

    def destroy
        @deck = Deck.find(params[:id])
        @deck.destroy
        render json: @deck
    end

    private

    def deck_params
        params.require(:deck).permit(:name, :size)
    end
end