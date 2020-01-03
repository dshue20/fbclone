class Like < ApplicationRecord
    validates :likeable_type, :likeable_id, :user_id, presence: true
    belongs_to :likeable,
        polymorphic: true
end
