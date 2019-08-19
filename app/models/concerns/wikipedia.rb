module Wikipedia
  extend ActiveSupport::Concern

  # capitalize first letter of name replace spaces with underscore get summary page from wikipedia or not found
  def add_desc(name)
    @name = name.capitalize.gsub(" ", "_")
    resp = Faraday.get "https://en.wikipedia.org/api/rest_v1/page/summary/#{@name}"
    @info = JSON.parse(resp.body)
    if @info['title'] == 'Not found.'
      self.update(desc: "Description not found")
    else
      self.update(desc: @info['extract'])
      self.update(imgsrc: @info['thumbnail']['source'])
    # if @info['extract']
    #   self.update(desc: @info['extract'])
    #   self.update(imgsrc: @info['thumbnail']['source'])
    # else
    #   self.update(desc: "Description not found")
    end
  end
end

