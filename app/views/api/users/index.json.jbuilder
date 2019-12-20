@users.each do |user|
    json.users do
        json.set! user.id do
            json.extract! user, :fname, :lname, :id
        end
    end
    json.posts do
        user.posts.each do |post|
            json.set! post.id do 
                json.extract! post, :body, :user_id, :id
            end
        end
    end
end