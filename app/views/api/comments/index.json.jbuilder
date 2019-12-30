@comments.each do |comment|
    json.comments do
        json.set! comment.id do
            json.extract! comment, :id, :body, :commentable_type, :commentable_id, :user_id
        end
    end
end