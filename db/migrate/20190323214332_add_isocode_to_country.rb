class AddIsocodeToCountry < ActiveRecord::Migration[5.2]
  def change
    add_column :countries, :isocode, :string
  end
end
