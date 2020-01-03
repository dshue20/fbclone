class AddCommentableAndLikeable < ActiveRecord::Migration[5.2]
  def change
    add_reference :comments, :commentable, polymorphic: true, index: true
    add_reference :likes, :likeable, polymorphic: true, index: true
  end
end
