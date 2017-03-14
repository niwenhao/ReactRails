class CreateWords < ActiveRecord::Migration[5.0]
  def change
    create_table :words do |t|
      t.string :content
      t.belongs_to :domain, foreign_key: true
      t.belongs_to :common_word, foreign_key: true

      t.timestamps
    end
  end
end
