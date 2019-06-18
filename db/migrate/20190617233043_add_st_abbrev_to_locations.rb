class AddStAbbrevToLocations < ActiveRecord::Migration[5.2]
  def change
    add_column :locations, :st_abbrev, :string
  end
end
