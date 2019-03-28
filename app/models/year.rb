class Year < ApplicationRecord
  has_many :country_years
  has_many :countries, through: :country_years
  has_many :species_years
  has_many :species, through: :species_years
end
