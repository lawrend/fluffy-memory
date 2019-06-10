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
      new_map = new google.maps.map(zoom: 4, center: center)
    end

    def generate_coordinates_for_all
      @locations = Location.all
      @locations.each do |l|
        @coordinates = Location.get_coordinates(l.loc)
        l.lat = @coordinates['results'][0]['geometry']['location']['lat']
        l.long = @coordinates['results'][0]['geometry']['location']['lng']
        l.save
      end
    end
  end
end

