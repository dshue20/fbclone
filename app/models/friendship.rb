class Friendship < ApplicationRecord
    validates :requestor_id, :receiver_id, :status, presence: true

    def self.find_by_ids(requestor_id, receiver_id)
        friendship = Friendship.where("requestor_id: requestor_id AND receiver_id: receiver_id")
        friendship ? friendship : nil
    end
end
