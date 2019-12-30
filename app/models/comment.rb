class Comment < ApplicationRecord
    validates :body, :commentable_type, :commentable_id, :user_id, presence: true
end
