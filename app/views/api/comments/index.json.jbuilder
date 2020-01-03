@comments.each do |comment|
    json.comments do
        json.set! comment.id do
            json.extract! comment, :id, :body, :commentable_type, :commentable_id, :user_id, :like_ids, :comment_ids
        end
    end
    comment.likes.each do |like|
        json.likes do
            json.set! like.id do
                json.extract! like, :id, :likeable_id, :likeable_type, :user_id
            end
        end
    end
    comment.comments.each do |comment|
        json.comments do
            json.set! comment.id do
                json.extract! comment, :id, :body, :commentable_id, :commentable_type, :user_id, :like_ids, :comment_ids
            end
        end
    end
end