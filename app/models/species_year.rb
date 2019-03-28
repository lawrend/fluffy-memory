class SpeciesYear < ApplicationRecord
  belongs_to :species
  belongs_to :year

  def self.get_enigma_collections
    conn = Faraday.new "https://public.enigma.com/api/"
    resp = conn.get("datasets/f2778fbc-47fd-45e3-a01a-936040650096") do |req|
      req.headers['Authorization'] = "Bearer: #{ENV['ENIGMA_API_KEY']}"
    end
    @enigma = resp.body
  end

end

