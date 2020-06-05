class CategoriesController < ApplicationController
    def index 
        categories = Category.all
        render json: categories, include: [:restaurants]
    end

    def show
        category = Category.find_by_id(params[:id])
        render json: category, include: [:restaurants]
    end

    def create
        category = Category.create(category_params)
        render json: category, include: [:restaurants]
    end

    def update
        category = Category.find_by_id(params[:id])
        category.update(category_params)
        render json: category, include: [:restaurants]
    end

    def destroy
        category = Category.find_by_id(params[:id])
        category.delete
        render json: {category_id: category.id}
    end

    private

    def category_params
        params.require(:category).permit(:group)
    end
end
