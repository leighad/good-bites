class Restaurant < ApplicationRecord
  belongs_to :category
  scope :alpha, -> { order (:name) }

end
