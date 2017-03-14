require 'test_helper'

class DomainTypesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @domain_type = domain_types(:one)
  end

  test "should get index" do
    get domain_types_url
    assert_response :success
  end

  test "should get new" do
    get new_domain_type_url
    assert_response :success
  end

  test "should create domain_type" do
    assert_difference('DomainType.count') do
      post domain_types_url, params: { domain_type: { description: @domain_type.description, name: @domain_type.name } }
    end

    assert_redirected_to domain_type_url(DomainType.last)
  end

  test "should show domain_type" do
    get domain_type_url(@domain_type)
    assert_response :success
  end

  test "should get edit" do
    get edit_domain_type_url(@domain_type)
    assert_response :success
  end

  test "should update domain_type" do
    patch domain_type_url(@domain_type), params: { domain_type: { description: @domain_type.description, name: @domain_type.name } }
    assert_redirected_to domain_type_url(@domain_type)
  end

  test "should destroy domain_type" do
    assert_difference('DomainType.count', -1) do
      delete domain_type_url(@domain_type)
    end

    assert_redirected_to domain_types_url
  end
end
