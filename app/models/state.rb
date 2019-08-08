class State < ApplicationRecord
  # include Maps
  include ApiHelper

  has_many :locations
  has_many :species_locations, through: :locations
  has_many :species, through: :species_locations


end
