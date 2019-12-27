@likes.each do |like|
    json.likes do
        json.set! like.id do
            json.extract! like, :id, :likeable_type, :likeable_id, :user_id
        end
    end
end