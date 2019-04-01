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


end
