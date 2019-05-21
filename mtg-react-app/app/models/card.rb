class Card < ActiveRecord::Base
    validates :name, :set, :multiverseid, :imageUrl, presence: true


#    t.string "name"
#    t.string "set"
#    t.integer "multiverseid"
#    t.string "imageUrl"
#    t.string "deck_id"
end