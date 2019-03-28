class CountryYear < ApplicationRecord
  belongs_to :country
  belongs_to :year

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
    resp = conn.get("datasets/11550ebf-e6ba-4bc7-ad84-5d43c18ee291") do |req|
      req.headers['Authorization'] = "Bearer: #{ENV['ENIGMA_API_KEY']}"
    end
    @enigma = resp.body
  end
end
