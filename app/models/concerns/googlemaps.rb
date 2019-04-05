module GoogleMaps
  extend ActiveSupport::Concern

  module ClassMethods
    def get_map(term)
      conn = Faraday.new 
