require 'test_helper'

class ContractsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @contract = contracts(:one)
  end

  test "should get index" do
    get contracts_url, as: :json
    assert_response :success
  end

  test "should create contract" do
    assert_difference('Contract.count') do
      post contracts_url, params: { contract: { award: @contract.award, award_ID_PIID: @contract.award_ID_PIID, award_description: @contract.award_description, funding_agency: @contract.funding_agency, funding_office: @contract.funding_office, funding_sub_agency: @contract.funding_sub_agency, naics_description: @contract.naics_description, recipient_congressional_district: @contract.recipient_congressional_district, recipient_name: @contract.recipient_name, recipient_parent_name: @contract.recipient_parent_name, recipient_state: @contract.recipient_state } }, as: :json
    end

    assert_response 201
  end

  test "should show contract" do
    get contract_url(@contract), as: :json
    assert_response :success
  end

  test "should update contract" do
    patch contract_url(@contract), params: { contract: { award: @contract.award, award_ID_PIID: @contract.award_ID_PIID, award_description: @contract.award_description, funding_agency: @contract.funding_agency, funding_office: @contract.funding_office, funding_sub_agency: @contract.funding_sub_agency, naics_description: @contract.naics_description, recipient_congressional_district: @contract.recipient_congressional_district, recipient_name: @contract.recipient_name, recipient_parent_name: @contract.recipient_parent_name, recipient_state: @contract.recipient_state } }, as: :json
    assert_response 200
  end

  test "should destroy contract" do
    assert_difference('Contract.count', -1) do
      delete contract_url(@contract), as: :json
    end

    assert_response 204
  end
end
