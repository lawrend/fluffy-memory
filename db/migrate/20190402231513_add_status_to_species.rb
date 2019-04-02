class AddStatusToSpecies < ActiveRecord::Migration[5.2]
  def change
    add_column :species, :status, :string
  end
end
