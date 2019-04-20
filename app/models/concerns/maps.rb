module Maps 
  extend ActiveSupport::Concern

  module ClassMethods
    def get_coordinates(name)
      map_name = name.gsub(" ", "+")
      conn = Faraday.new "https://maps.googleapis.com/maps/api/"
      resp = conn.get("geocode/json?address= #{map_name}&components=country:US&key=#{ENV['MAPS_KEY']}")
      @place = JSON.parse(resp.body)
    end

    def get_map(center)

      
    end

  end
end

