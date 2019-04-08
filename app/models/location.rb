class Location < ApplicationRecord
  include Enigma
  
  has_many :species_locations
  has_many :species, through: :species_locations
end
