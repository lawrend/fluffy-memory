module Maps 
  extend ActiveSupport::Concern

  module ClassMethods
    def get_map(name)
      map_name = name.gsub(" ", "+")
      conn = Faraday.new "https://maps.googleapis.com/maps/api/geocode/json?"
      resp = conn.get("address= #{map_name}&components=country:US&key=#{ENV['MAPS_KEY']}")
      @place = JSON.parse(resp.body)
    end
  end
end

