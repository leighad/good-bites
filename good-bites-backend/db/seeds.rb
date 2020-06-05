# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

Restaurant.destroy_all 
Category.destroy_all

category_names = []
30.times do 
    group = Faker::Restaurant.type
    category = Category.create(group: group)
    category_names << category
end

group_names = category_names.map {|cat| cat.group}.uniq


restaurant_list = []
category_names.each do |category|
    10.times do |rest|
        name = Faker::Restaurant.name
        description = Faker::Restaurant.description
        review = Faker::Restaurant.review
        restaurant = Restaurant.create(name: name, description: description, review: review, category_id: category.id)
        restaurant_list << restaurant
    end
end 


restaurant_names = restaurant_list.map {|rest| rest.name}.uniq
restaurant_descriptions = restaurant_list.map {|rest| rest.description}.uniq
restaurant_reviews = restaurant_list.map {|rest| rest.review}.uniq

