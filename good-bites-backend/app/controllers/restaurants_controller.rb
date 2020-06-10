class RestaurantsController < ApplicationController
    before_action :set_restaurant, only: [:show, :update, :destroy]

    def index 
        restaurants = Restaurant.all
        render json: restaurants
    end

    def show
        set_restaurant
        render json: restaurant
    end

    def create
        restaurant = Restaurant.new(restaurant_params)
        if restaurant.save
            render json: restaurant
        else
            render json: { errors: restaurant.errors.full_messages }
        end
    end

    def update
        set_restaurant.update(restaurant_params)
        render json: restaurant
    end

    def destroy
        set_restaurant.delete
        render json: {restaurant_id: restaurant.id}
    end

    private

    def set_restaurant
        restaurant = Restaurant.find_by_id(params[:id])
    end

    def restaurant_params
        params.require(:restaurant).permit(:name, :description, :review, :category_id)
    end
end
