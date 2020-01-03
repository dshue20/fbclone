class Post < ApplicationRecord
    validates :body, :user_id, presence: true
    belongs_to :user
    include Likeable
    include Commentable
end
