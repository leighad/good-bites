class RestaurantsController < ApplicationController
    def index 
        restaurants = Restaurant.all
        render json: restaurants
    end

    def show
        restaurant = Restaurant.find_by_id(params[:id])
        render json: restaurant
    end
end
