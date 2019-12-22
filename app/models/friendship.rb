class Friendship < ApplicationRecord
    validates :requestor_id, :receiver_id, :status, presence: true
end
