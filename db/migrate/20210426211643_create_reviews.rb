class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.references :user, null: true, foreign_key: true
      t.references :book, null: true, foreign_key: true
      t.int :rating
      t.string :content

      t.timestamps
    end
  end
end
