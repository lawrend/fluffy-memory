require 'test_helper'

class SpeciesYearsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @species_year = species_years(:one)
  end

  test "should get index" do
    get species_years_url, as: :json
    assert_response :success
  end

  test "should create species_year" do
    assert_difference('SpeciesYear.count') do
      post species_years_url, params: { species_year: { species_id: @species_year.species_id, year_id: @species_year.year_id } }, as: :json
    end

    assert_response 201
  end

  test "should show species_year" do
    get species_year_url(@species_year), as: :json
    assert_response :success
  end

  test "should update species_year" do
    patch species_year_url(@species_year), params: { species_year: { species_id: @species_year.species_id, year_id: @species_year.year_id } }, as: :json
    assert_response 200
  end

  test "should destroy species_year" do
    assert_difference('SpeciesYear.count', -1) do
      delete species_year_url(@species_year), as: :json
    end

    assert_response 204
  end
end
