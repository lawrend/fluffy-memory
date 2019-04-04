class Species < ApplicationRecord
  include Enigma

  has_many :species_locations
  has_many :locations, through: :species_locations

  # Would make more sense to create one record per species and maybe make location another model

  # def self.get_enigma_collections
  #   conn = Faraday.new "https://public.enigma.com/api/"
  #   resp = conn.get("datasets/f2778fbc-47fd-45e3-a01a-936040650096") do |req|
  #     req.headers['Authorization'] = "Bearer: #{ENV['ENIGMA_API_KEY']}"
  #   end
  #   @enigma = JSON.parse(resp.body)
  #   # @enigma2 = JSON.parse(@enigma)
  #   @enigma['current_snapshot']['id']
  #   # @enigma = resp.body["current_snapshot"]["id"]
  # end
 
  # def self.get_enigma_dataset(datasetID)
  #   conn = Faraday.new "https://public.enigma.com/api/"
  #   resp = conn.get("datasets/#{datasetID}") do |req|
  #     req.headers['Authorization'] = "Bearer: #{ENV['ENIGMA_API_KEY']}"
  #   end
  #   snapshot = JSON.parse(resp.body)
  #   @snapshotID = snapshot['current_snapshot']['id']

  #   resp2 = conn.get("snapshots/#{@snapshotID}?&row_limit=200&row_offset=0&include_serialids=true") do |req|
  #     req.headers['Authorization'] = "Bearer: #{ENV['ENIGMA_API_KEY']}"
  #   end

  #   @dataset = JSON.parse(resp2.body)
  # end

end
