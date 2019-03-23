class Year < ApplicationRecord
  has_many :country_years
  has_many :countries, through: :country_years
end
