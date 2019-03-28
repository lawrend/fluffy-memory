class CreateContractYears < ActiveRecord::Migration[5.2]
  def change
    create_table :contract_years do |t|
      t.references :contracts, foreign_key: true
      t.references :years, foreign_key: true

      t.timestamps
    end
  end
end
