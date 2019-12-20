@posts.each do |post|
    json.posts do 
        json.set! post.id do 
            json.extract! post, :body, :user_id, :id
        end
    end
    json.users do
        json.set! post.user_id do
            json.extract! post.user, :fname, :lname
        end
    end
end