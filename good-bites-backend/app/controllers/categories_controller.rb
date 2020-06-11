class CategoriesController < ApplicationController
    before_action :set_category, only: [:show, :update, :destroy]

    def index 
        categories = Category.alpha
        render json: categories, include: [:restaurants]
    end

    def show
        set_category
        render json: category, include: [:restaurants]
    end

    def create
        category = Category.new(category_params)
        if category.save
            render json: category, include: [:restaurants]
        else
            render json: { errors: category.errors.full_messages }
        end
    end

    def update
        set_category.update(category_params)
        render json: category, include: [:restaurants]
    end

    def destroy
        set_category.delete
        render json: {category_id: category.id}
    end

    private

    def set_category
        category = Category.find_by_id(params[:id])
    end

    def category_params
        params.require(:category).permit(:group)
    end
end
