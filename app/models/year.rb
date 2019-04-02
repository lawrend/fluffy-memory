class Year < ApplicationRecord
  has_many :country_years
  has_many :countries, through: :country_years
  has_many :contract_years
  has_many :contracts, through: :contract_years
  
  # need to get endpoints for all contract datasets for example https://public.enigma.com/datasets/government-spending-contracts-2018/0c24ef38-9a7c-4bd2-98ec-c32ac9916aaf
end
