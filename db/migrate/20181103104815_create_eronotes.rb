class CreateEronotes < ActiveRecord::Migration[5.2]
  def change
    create_table :eronotes do |t|

      t.timestamps
    end
  end
end
