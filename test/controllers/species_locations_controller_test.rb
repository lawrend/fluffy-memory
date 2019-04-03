require 'test_helper'

class SpeciesLocationsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @species_location = species_locations(:one)
  end

  test "should get index" do
    get species_locations_url, as: :json
    assert_response :success
  end

  test "should create species_location" do
    assert_difference('SpeciesLocation.count') do
      post species_locations_url, params: { species_location: { location_id: @species_location.location_id, species_id: @species_location.species_id } }, as: :json
    end

    assert_response 201
  end

  test "should show species_location" do
    get species_location_url(@species_location), as: :json
    assert_response :success
  end

  test "should update species_location" do
    patch species_location_url(@species_location), params: { species_location: { location_id: @species_location.location_id, species_id: @species_location.species_id } }, as: :json
    assert_response 200
  end

  test "should destroy species_location" do
    assert_difference('SpeciesLocation.count', -1) do
      delete species_location_url(@species_location), as: :json
    end

    assert_response 204
  end
end
