class ApplicationController < ActionController::Base
  before_action :authenticate_user!, :only => [:g8map_kanri]
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?
  helper_method :current_user

  def configure_permitted_parameters
    # sign_inのときに、group_keyも許可する
    devise_parameter_sanitizer.permit(:sign_in, keys: [:group_key])
    # sign_upのときに、group_keyも許可する
    devise_parameter_sanitizer.permit(:sign_up, keys: [:group_key])
    #account_updateのときに、group_keyも許可する
    devise_parameter_sanitizer.permit(:account_update, keys: [ :group_key])
  end

  def after_sign_in_path_for(resource)
    index_path
  end

  def after_sign_out_path_for(resource)
    index_path
  end

end
