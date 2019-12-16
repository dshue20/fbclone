class AddGenderToUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :name
    add_column :users, :fname, :string
    add_column :users, :lname, :string
    add_column :users, :gender, :string
  end
end
