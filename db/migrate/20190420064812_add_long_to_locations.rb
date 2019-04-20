class AddLongToLocations < ActiveRecord::Migration[5.2]
  def change
    add_column :locations, :long, :integer
  end
end
