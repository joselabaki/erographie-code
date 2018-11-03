require 'test_helper'

class EronotesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get eronotes_index_url
    assert_response :success
  end

  test "should get show" do
    get eronotes_show_url
    assert_response :success
  end

  test "should get create" do
    get eronotes_create_url
    assert_response :success
  end

  test "should get edit" do
    get eronotes_edit_url
    assert_response :success
  end

  test "should get destroy" do
    get eronotes_destroy_url
    assert_response :success
  end

end
