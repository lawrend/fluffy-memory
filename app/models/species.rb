class Species < ApplicationRecord
  # include Enigma, Wiki
  include Wikipedia

  has_many :species_locations
  has_many :locations, through: :species_locations

end
