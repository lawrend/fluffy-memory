class CountryYear < ApplicationRecord
  belongs_to :country
  belongs_to :year
end
