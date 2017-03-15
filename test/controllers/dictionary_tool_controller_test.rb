require 'test_helper'

class DictionaryToolControllerTest < ActionDispatch::IntegrationTest
  test "should get domain_type_tool" do
    get dictionary_tool_domain_type_tool_url
    assert_response :success
  end

  test "should get domain_tool" do
    get dictionary_tool_domain_tool_url
    assert_response :success
  end

  test "should get word_tool" do
    get dictionary_tool_word_tool_url
    assert_response :success
  end

end
