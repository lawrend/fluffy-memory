class AddLatToLocations < ActiveRecord::Migration[5.2]
  def change
    add_column :locations, :lat, :float
  end
end
