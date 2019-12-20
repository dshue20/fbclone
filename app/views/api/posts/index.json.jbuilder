@posts.each do |post|
    json.posts do 
        json.set! post.id do 
            json.extract! post, :body, :user_id, :id, :created_at, :updated_at
        end
    end
    json.users do
        json.set! post.user_id do
            json.extract! post.user, :fname, :lname, :id
        end
    end
end