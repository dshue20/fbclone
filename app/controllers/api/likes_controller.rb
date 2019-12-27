class Api::LikesController < ApplicationController
    def index
        # @friendship = Friendship.where(requestor_id: params[:requestor_id], receiver_id: params[:receiver_id]).first
        @likes = Like.where(likeable_type: params[:likeable_type], likeable_id: params[:likeable_id])
        render :index
    end

    def create
        @like = Like.new(like_params)
        if @like.save
            render :show
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def destroy
        @like = Like.find(params[:id])
        if @like
            @like.destroy
            render :show
        else
            render json: ["Like does not exist"], status: 404
        end
    end

    private

    def like_params
        params.require(:like).permit(:likeable_type, :likeable_id, :user_id)
    end
end
