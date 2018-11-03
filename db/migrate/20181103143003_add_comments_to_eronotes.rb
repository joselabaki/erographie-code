class AddCommentsToEronotes < ActiveRecord::Migration[5.2]
  def change
    add_column :eronotes, :body, :text
  end
end
