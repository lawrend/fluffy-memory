class RemovePopulationFromCountries < ActiveRecord::Migration[5.2]
  def change
    remove_column :countries, :population, :integer
  end
end
