class CardsController < ApplicationController
    def index
        @cards = Card.all
        render json: @cards
    end

    def show
        @card = Card.find(params[:id])
        render json: card
    end

    def create
        @card = Card.create(card_params)
        render json: @card
    end

    private

    def card_params
        params.require(:card).permit(:name, :set, :multiverseid, :imageUrl)
    end
end