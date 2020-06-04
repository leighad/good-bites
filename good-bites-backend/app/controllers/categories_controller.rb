class CategoriesController < ApplicationController
    def index 
        categories = Category.all
        render json: categories, include: [:restaurants]
    end

    def show
        category = Category.find_by_id(params[:id])
        render json: category, include: [:restaurants]
    end
end
