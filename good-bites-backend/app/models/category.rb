class Category < ApplicationRecord
    has_many :restaurants
    scope :alpha, -> { order (:group) }

end
