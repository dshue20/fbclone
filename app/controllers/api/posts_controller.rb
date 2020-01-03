class Api::PostsController < ApplicationController
    def index
        @posts = Post.all.includes(:likes, :comments)
        # @comments = posts.comments
        render :index
    end

    def create
        @post = Post.new(post_params)
        if @post.save
            @posts = Post.all
            render :index
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def update
        @post = Post.find(params[:id])
        if @post.update(post_params)
            render :index
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def destroy
        @post = Post.find(params[:id])
        @post.delete!
        render :index
    end
    
    private 
    
    def post_params 
        params.require(:post).permit(:body, :user_id, :like_ids, :comment_ids, :receiver_id)
    end
end