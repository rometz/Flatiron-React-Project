class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :name
      t.string :names
      t.string :manaCost
      t.integer :cmc
      t.string :colors
      t.string :colorIdentity
      t.string :type
      t.string :supertypes
      t.string :types
      t.string :rarity
      t.string :set
      t.text :text
      t.string :artist
      t.string :number
      t.string :power
      t.string :toughness
      t.integer :multiverseid
      t.string :imageUrl
      t.string :id
    end
  end
end
