class Location < ApplicationRecord
  include Enigma, Maps

  has_many :species_locations
  has_many :species, through: :species_locations

  def add_lat_lng
    map_name = self.loc.gsub(" ", "+")
    conn = Faraday.new "https://maps.googleapis.com/maps/api/"
    resp = conn.get("geocode/json?address= #{map_name}&components=country:US&key=#{ENV['MAPS_KEY']}")
    @place = JSON.parse(resp.body)
    if (@place['results'][0]['geometry']['location']['lat'])     && (@place['results'][0]['geometry']['location']['lng']) 
      @lat = @place['results'][0]['geometry']['location']['lat'] 
      @long = @place['results'][0]['geometry']['location']['lng'] 
      self.update(lat: @lat, long: @long)
    end
  end

end

