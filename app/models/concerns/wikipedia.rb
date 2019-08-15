module Wikipedia
  extend ActiveSupport::Concern

  # capitalize first letter of name replace spaces with underscore get summary page from wikipedia or not found
  def add_desc(name)
    @name = name.capitalize.gsub(" ", "_")
    resp = Faraday.get "https://en.wikipedia.org/api/rest_v1/page/summary/#{@name}"
    @info = JSON.parse(resp.body)
    if @info['extract']
      self.update(desc: @info['extract'])
    else
      self.update(desc: "Description not found")
    end
  end
end

