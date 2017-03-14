class CreateDomainTypes < ActiveRecord::Migration[5.0]
  def change
    create_table :domain_types do |t|
      t.string :name
      t.text :description

      t.timestamps
    end
  end
end
