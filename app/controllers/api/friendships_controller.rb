class Api::FriendshipsController < ApplicationController
    def index
        # @friendships = Friendship.all
        @friendship = Friendship.where(requestor_id: params[:requestor_id], receiver_id: params[:receiver_id]).first
        if !@friendship
            @friendship = Friendship.where(requestor_id: params[:receiver_id], receiver_id: params[:requestor_id]).first
        end
        # if @friendship.nil?
        #     @friendship = 
        render :show
    end
    
    def create
        @friendship = Friendship.new(friendship_params)
        if @friendship.save
            render :show
        else
            render json: @friendship.errors.full_messages, status: 422
        end
    end

    def destroy
        @friendship = Friendship.find(params[:id])
        if @friendship
            @friendship.destroy
            render :show
        else
            render json: ["Friendship does not exist"], status: 404
        end
    end

    def update
        @friendship = Friendship.find(params[:id])
        if @friendship.update(friendship_params)
            render :show
        else
            render json: @friendship.errors.full_messages, status: 422
        end
    end

    private

    def friendship_params
        params.require(:friendship).permit(:requestor_id, :receiver_id, :status)
    end
end
