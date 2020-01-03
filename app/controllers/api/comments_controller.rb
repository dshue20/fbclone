class Api::CommentsController < ApplicationController
    def index
        #@comments = Comment.where(commentable_type: params[:commentable_type], commentable_id: params[:commentable_id])
        @comments = Comment.all
        render :index
    end

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        if @comment
            @comment.destroy
            render :show
        else
            render json: ["Comment does not exist"], status: 404
        end
    end

    private

    def comment_params
        params.require(:comment).permit(:body, :commentable_type, :commentable_id, :user_id, :like_ids, :comment_ids)
    end
end
