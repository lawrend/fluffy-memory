class AddPopulationToCountryYears < ActiveRecord::Migration[5.2]
  def change
    add_column :country_years, :population, :integer
  end
end
