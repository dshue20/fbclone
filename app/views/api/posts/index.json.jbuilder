@posts.each do |post|
    json.posts do 
        json.set! post.id do 
            json.extract! post, :body, :user_id, :id, :like_ids, :created_at, :updated_at
        end
    end
    json.users do
        json.set! post.user_id do
            json.extract! post.user, :fname, :lname, :id, :bio
        end
    end
    post.likes.each do |like|
        json.likes do
            json.set! like.id do
                json.extract! like, :id, :likeable_id, :likeable_type
            end
        end
    end
end