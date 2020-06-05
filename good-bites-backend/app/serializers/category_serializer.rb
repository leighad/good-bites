class CategorySerializer < ActiveModel::Serializer
  attributes :id, :group
  has_many :restaurants
end
