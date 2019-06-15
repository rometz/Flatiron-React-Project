class CardsController < ApplicationController

    def index
        @cards = Card.all
        render json: @cards
    end

    def show
        @card = Card.find(params[:id])
        render json: @card
    end

    def create
        @card = Card.create!(card_params)
        render json: @card
    end

    def self.delete_all
        self.all.clear
    end

    private

    def card_params
        params.permit(:name, :id)
    end
end