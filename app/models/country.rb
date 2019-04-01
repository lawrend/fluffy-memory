class Country < ApplicationRecord
  has_many :country_years
  has_many :years, through: :country_years

  
end
