class State < ApplicationRecord
  has_many :locations
  has_many :species, through: :locations
end
