require 'test_helper'

class ContractYearsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @contract_year = contract_years(:one)
  end

  test "should get index" do
    get contract_years_url, as: :json
    assert_response :success
  end

  test "should create contract_year" do
    assert_difference('ContractYear.count') do
      post contract_years_url, params: { contract_year: { contracts_id: @contract_year.contracts_id, years_id: @contract_year.years_id } }, as: :json
    end

    assert_response 201
  end

  test "should show contract_year" do
    get contract_year_url(@contract_year), as: :json
    assert_response :success
  end

  test "should update contract_year" do
    patch contract_year_url(@contract_year), params: { contract_year: { contracts_id: @contract_year.contracts_id, years_id: @contract_year.years_id } }, as: :json
    assert_response 200
  end

  test "should destroy contract_year" do
    assert_difference('ContractYear.count', -1) do
      delete contract_year_url(@contract_year), as: :json
    end

    assert_response 204
  end
end
