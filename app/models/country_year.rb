class CountryYear < ApplicationRecord
  belongs_to :country
  belongs_to :year

  include Enigma
  
end
