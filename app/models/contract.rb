class Contract < ApplicationRecord
  has_many :contract_years
  has_many :years, through: :contract_years
end
