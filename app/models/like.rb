class Like < ApplicationRecord
    validates :likeable_type, :likeable_id, :user_id, presence: true
end
