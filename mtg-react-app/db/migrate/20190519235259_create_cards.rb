class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :name
      t.string :set
      t.integer :multiverseid
      t.string :imageUrl
      t.string :deck_id
    end
  end
end
