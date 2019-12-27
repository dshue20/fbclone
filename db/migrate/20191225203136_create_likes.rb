class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.string :likeable_type, null: false
      t.integer :likeable_id, null: false, index: true
      t.timestamps
    end
  end
end