class AddIsCommonToDomain < ActiveRecord::Migration[5.0]
  def change
    add_column :domains, :is_common, :boolean
  end
end
