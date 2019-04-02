class ContractYear < ApplicationRecord
  belongs_to :contracts
  belongs_to :years
  include Enigma

end
