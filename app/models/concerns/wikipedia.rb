module Wiki
  extend ActiveSupport::Concern
  
  module ClassMethods
    
    def get_info(name)
      conn = Faraday.new "https://en.wikipedia.org/w/api.php?"
      resp = conn.get("action=opensearch&format=json&search=#{name}&namespace=0&limit=10")
      @info = JSON.parse(resp.body)
    end
  end
end

