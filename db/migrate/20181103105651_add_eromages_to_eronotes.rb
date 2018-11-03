class AddEromagesToEronotes < ActiveRecord::Migration[5.2]
  def change
    add_column :eronotes, :eromage, :string
  end
end
