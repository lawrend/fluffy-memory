module Enigma
  extend ActiveSupport::Concern

  module ClassMethods

    def generate_state_map(name)
      map_name = name.gsub(" ", "+")
      conn = Faraday.new "https://maps.googleapis.com/maps/api/"
      resp = conn.get("geocode/json?address= #{map_name}&key=#{ENV['MAPS_KEY']}")
      @place = JSON.parse(resp.body)
      @new_place = @place['results'][0]['geometry']['location']
    end

    def get_coordinates(name)
      map_name = name.gsub(" ", "+")
      conn = Faraday.new "https://maps.googleapis.com/maps/api/"
      resp = conn.get("geocode/json?address= #{map_name}&components=country:US&key=#{ENV['MAPS_KEY']}")
      @place = JSON.parse(resp.body)
    end

    def get_map(center)
      @new_map = new google.maps.map(zoom: 4, center: center)
    end

    def get_enigma_dataset(datasetID)
      conn = Faraday.new "https://public.enigma.com/api/"
      resp = conn.get("datasets/#{datasetID}") do |req|
        req.headers['Authorization'] = "Bearer: #{ENV['ENIGMA_API_KEY']}"
      end
      snapshot = JSON.parse(resp.body)
      @snapshotID = snapshot['current_snapshot']['id']
      resp2 = conn.get("snapshots/#{@snapshotID}?&row_limit=1200&row_offset=0&include_serialids=true")do |req|
      # resp2 = conn.get("export/#{@snapshotID}") do |req|
        req.headers['Authorization'] = "Bearer: #{ENV['ENIGMA_API_KEY']}"
      end
      @dataset = JSON.parse(resp2.body)
    end


    def add_lat_lng(pa)
      map_name = pa.loc.gsub(" ", "+")
      conn = Faraday.new "https://maps.googleapis.com/maps/api/"
      resp = conn.get("geocode/json?address= #{map_name}&components=country:US&key=#{ENV['MAPS_KEY']}")
      @place = JSON.parse(resp.body)
      if (@place['results'][0]['geometry']['location']['lat']) && (@place['results'][0]['geometry']['location']['lng']) 
        @lat = @place['results'][0]['geometry']['location']['lat'] 
        @long = @place['results'][0]['geometry']['location']['lng'] 
        pa.update(lat: @lat, long: @long)
      end
    end

    def get_info(name)
      conn = Faraday.new "https://en.wikipedia.org/w/api.php?"
      resp = conn.get("action=opensearch&format=json&search=#{name}&namespace=0&limit=10")
      @info = JSON.parse(resp.body)
    end


    def convert_state_abbrev(abbrev)
      case abbrev
      when "AK"
        return "Alaska"
      when "AL"
        return "Alabama"
      when "AR"
        return "Arkansas"
      when "AS"
        return "American Samoa"
      when "AZ"
        return "Arizona"
      when "CA"
        return "California"
      when "CO"
        return "Colorado"
      when "CT"
        return "Connecticut"
      when "DE"
        return "Delaware"
      when "FL"
        return "Florida"
      when "GA"
        return "Georgia"
      when "GU"
        return "Guam"
      when "HI"
        return "Hawaii"
      when "IA"
        return "Iowa"
      when "ID"
        return "Idaho"
      when "IL"
        return "Illinois"
      when "IN"
        return "Indiana"
      when "KS"
        return "Kansas"
      when "KY"
        return "Kentucky"
      when "LA"
        return "Louisiana"
      when "MA"
        return "Massachusets"
      when "MD"
        return "Maryland"
      when "ME"
        return "Maine"
      when "MI"
        return "Michigan"
      when "MN"
        return "Minnesota"
      when "MO"
        return "Missouri"
      when "MS"
        return "Mississippi"
      when "MT"
        return "Montana"
      when "NC"
        return "North Carolina"
      when "ND"
        return "North Dakota"
      when "NE"
        return "Nebraska"
      when "NJ"
        return "New Jersey"
      when "NM"
        return "New Mexico"
      when "NV"
        return "Nevada"
      when "NY"
        return "New York"
      when "OH"
        return "Ohio"
      when "OK"
        return "Oklahoma"
      when "OR"
        return "Oregon"
      when "PA"
        return "Pennsylvania"
      when "PR"
        return "Puerto Rico"
      when "RI"
        return "Rhode Island"
      when "SC"
        return "South Carolina"
      when "SD"
        return "South Dakota"
      when "TN"
        return "Tennessee"
      when "TX"
        return "Texas"
      when "UM"
        return "United States Minor Outlying Islands"
      when "UT"
        return "Utah"
      when "VA"
        return "Virgina"
      when "VI"
        return "Virgin Islands"
      when "WA"
        return "Washington"
      when "WI"
        return "Wisconsin"
      when "WV"
        return "West Virginia"
      when "WY"
        return "Wyoming"
      else
        return abbrev
      end
    end


  end
end

