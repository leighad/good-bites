class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :review, :category_id
  belongs_to :category 
end
