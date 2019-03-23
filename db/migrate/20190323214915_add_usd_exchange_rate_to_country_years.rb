class AddUsdExchangeRateToCountryYears < ActiveRecord::Migration[5.2]
  def change
    add_column :country_years, :usd_exchange_rate, :integer
  end
end
