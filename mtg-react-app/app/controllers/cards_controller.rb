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
        @card = Card.create!(
            name: params["name"],
            multiverseid: params["id"]
        )
        render json: @card
    end

    def delete_all
        Card.delete_all
        @card = Card.new
        render json: @card
    end

    private

    def card_params
        params.require(:card).permit(:name, :id)
    end
end