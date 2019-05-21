class CreateDecks < ActiveRecord::Migration[5.2]
  def change
    create_table :decks do |t|
      t.string :name, :default => "Unnamed Deck"
      t.integer :size
    end
  end
end
