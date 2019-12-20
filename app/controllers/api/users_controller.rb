class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def index
        @users = User.all
        render :index
    end

    def show
        @user = User.fiind(params[:id])
        render :show
    end
    
    private 
    
    def user_params 
        params.require(:user).permit(:email, :password, :fname, :lname, :gender, :birthday, :bio)
    end
end