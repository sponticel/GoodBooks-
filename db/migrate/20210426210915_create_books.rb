:class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :genre
      t.date :release_date
      t.string :img_url
      t.string :synopsis

      t.timestamps
    end
  end
end
