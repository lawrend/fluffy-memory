class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.string :loc
      t.string :state
      t.string :other_states

      t.timestamps
    end
  end
end
