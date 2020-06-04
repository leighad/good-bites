class UsersController < ApplicationController
    def index 
        users = User.all
        render json: users, include: [:restaurants]
    end

    def show
        user = User.find_by_id(params[:id])
        render json: user, include: [:restaurants]
    end
end
