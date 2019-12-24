@friendships.each do |friendship|
    json.friendships do
        json.set! friendship.id do
            json.extract! friendship, :id, :requestor_id, :receiver_id, :status
        end
    end
end