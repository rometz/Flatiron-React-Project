class Deck < ActiveRecord::Base
    has_many :cards
    validates :size, length: { maximum: 40 }
end