class Post < ApplicationRecord
    validates :body, :user_id, presence: true
    belongs_to :user
    has_many :likes,
        foreign_key: :likeable_id
end
