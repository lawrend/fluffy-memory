class AddImgsrcToSpecies < ActiveRecord::Migration[5.2]
  def change
    add_column :species, :imgsrc, :string
  end
end
