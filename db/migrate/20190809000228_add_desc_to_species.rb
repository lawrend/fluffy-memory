class AddDescToSpecies < ActiveRecord::Migration[5.2]
  def change
    add_column :species, :desc, :string
  end
end
