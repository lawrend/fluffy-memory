class Species < ApplicationRecord
  has_many :species_years
  has_many :years, through: :species_years
end
