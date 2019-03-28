class Species < ApplicationRecord
  has_many :country_years
  has_many :years, through: :species_years
end
