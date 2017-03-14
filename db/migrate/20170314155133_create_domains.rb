class CreateDomains < ActiveRecord::Migration[5.0]
  def change
    create_table :domains do |t|
      t.string :name
      t.text :descript
      t.belongs_to :domain_type, foreign_key: true

      t.timestamps
    end
  end
end
