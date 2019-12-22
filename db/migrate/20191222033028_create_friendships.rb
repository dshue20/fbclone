class CreateFriendships < ActiveRecord::Migration[5.2]
  def change
    create_table :friendships do |t|
      t.integer :requestor_id, index: true, null: false
      t.integer :receiver_id, index: true, null: false
      t.string :status, null: false
      t.timestamps
    end
  end
end
