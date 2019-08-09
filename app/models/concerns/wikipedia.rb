module Wikipedia
  extend ActiveSupport::Concern
  
  module ClassMethods
    
    def add_desc(name)
      conn = Faraday.new "https://en.wikipedia.org/w/api.php?"
      resp = conn.get("action=opensearch&format=json&search=#{name}&namespace=0&limit=10")
      @info = JSON.parse(resp.body)
      self.desc = @info
      self.update
    end
  end
end

