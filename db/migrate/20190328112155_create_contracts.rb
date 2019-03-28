class CreateContracts < ActiveRecord::Migration[5.2]
  def change
    create_table :contracts do |t|
      t.string :award_ID_PIID
      t.string :funding_agency
      t.string :funding_sub_agency
      t.string :funding_office
      t.text :award_description
      t.string :recipient_name
      t.string :recipient_parent_name
      t.string :recipient_state
      t.integer :recipient_congressional_district
      t.string :naics_description
      t.float :award

      t.timestamps
    end
  end
end
