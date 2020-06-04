class CreateRestaurants < ActiveRecord::Migration[6.0]
  def change
    create_table :restaurants do |t|
      t.string :rest_name
      t.string :type
      t.string :description
      t.string :review
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
