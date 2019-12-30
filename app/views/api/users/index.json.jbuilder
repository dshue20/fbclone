@users.each do |user|
    json.users do
        json.set! user.id do
            json.extract! user, :fname, :lname, :id, :bio, :birthday
        end
    end
    json.posts do
        user.posts.each do |post|
            json.set! post.id do 
                json.extract! post, :body, :user_id, :id, :like_ids, :comment_ids, :receiver_id, :created_at, :updated_at
            end
        end
    end
end