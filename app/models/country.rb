class Country < ApplicationRecord
  has_many :country_years
  has_many :years, through: :country_years

  def self.search_enigma_api(term)
    conn = Faraday.new "https://public.enigma.com/api/" 
    resp = conn.get("collections/") do |req|
      req.headers['Authorization'] = "Bearer: #{ENV['ENIGMA_API_KEY']}"
      req.params['query'] = term
    end
    @enigma = resp.body
  end

  def self.get_enigma_collections
    conn = Faraday.new "https://public.enigma.com/api/"
    resp = conn.get("collections/") do |req|
      req.headers['Authorization'] = "Bearer: #{ENV['ENIGMA_API_KEY']}"
    end
    @enigma = resp.body
  end

end
