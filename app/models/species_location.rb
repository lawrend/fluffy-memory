class SpeciesLocation < ApplicationRecord
  include ApiHelper

  belongs_to :species
  belongs_to :location

end
