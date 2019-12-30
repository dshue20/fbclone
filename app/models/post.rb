class Post < ApplicationRecord
    validates :body, :user_id, presence: true
    belongs_to :user
    has_many :likes,
        foreign_key: :likeable_id
    has_many :comments,
        foreign_key: :commentable_id
end
