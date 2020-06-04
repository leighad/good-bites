# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
require 'securerandom'

User.delete_all
Restaurant.delete_all

user_names = [
    'Kiki',
    'Luigi',
    'BeeBee',
    'Tankie',
    'CoCo'
]

user_collection = []

user_names.each do |name|
    user_collection << User.create(user_name: name)
end

user_collection.each do |user|
    list_size = (SecureRandom.random_number(10) + 1).floor

    (1..list_size).each do |rest|
        name = Faker::Restaurant.name
        type = Faker::Restaurant.type
        description = Faker::Restaurant.description
        review = Faker::Restaurant.review
        Restaurant.create(rest_name: name, type: type, description: description, review: review, user_id: user.id)
    end
end

