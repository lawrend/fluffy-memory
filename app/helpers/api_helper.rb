module ApiHelper

  def get_enigma_dataset(datasetID)
    conn = Faraday.new "https://public.enigma.com/api/"
    resp = conn.get("datasets/#{datasetID}") do |req|
      req.headers['Authorization'] = "Bearer: #{ENV['ENIGMA_API_KEY']}"
    end
    @snapshotID = resp['current_snapshot']['id']

    resp2 = conn.get("export/#{@snapshotID}") do |req|
      req.headers['Authorization'] = "Bearer: #{ENV['ENIGMA_API_KEY']}"
    end
    @dataset = resp2.body
  end

def add_lat_lng(pa)
    map_name = pa.loc.gsub(" ", "+")
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
