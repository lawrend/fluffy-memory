class AddLocationToSpecies < ActiveRecord::Migration[5.2]
  def change
    add_column :species, :location, :string
  end
end
