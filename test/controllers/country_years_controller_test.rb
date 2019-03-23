require 'test_helper'

class CountryYearsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @country_year = country_years(:one)
  end

  test "should get index" do
    get country_years_url, as: :json
    assert_response :success
  end

  test "should create country_year" do
    assert_difference('CountryYear.count') do
      post country_years_url, params: { country_year: { country_id: @country_year.country_id, year_id: @country_year.year_id } }, as: :json
    end

    assert_response 201
  end

  test "should show country_year" do
    get country_year_url(@country_year), as: :json
    assert_response :success
  end

  test "should update country_year" do
    patch country_year_url(@country_year), params: { country_year: { country_id: @country_year.country_id, year_id: @country_year.year_id } }, as: :json
    assert_response 200
  end

  test "should destroy country_year" do
    assert_difference('CountryYear.count', -1) do
      delete country_year_url(@country_year), as: :json
    end

    assert_response 204
  end
end
