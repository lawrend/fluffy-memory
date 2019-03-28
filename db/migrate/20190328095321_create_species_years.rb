class CreateSpeciesYears < ActiveRecord::Migration[5.2]
  def change
    create_table :species_years do |t|
      t.references :species, foreign_key: true
      t.references :year, foreign_key: true

      t.timestamps
    end
  end
end
