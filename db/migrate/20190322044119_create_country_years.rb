class CreateCountryYears < ActiveRecord::Migration[5.2]
  def change
    create_table :country_years do |t|
      t.references :country, foreign_key: true
      t.references :year, foreign_key: true

      t.timestamps
    end
  end
end
