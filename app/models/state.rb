class State < ApplicationRecord
  include Maps

  has_many :locations
  has_many :species, through: :locations


end
