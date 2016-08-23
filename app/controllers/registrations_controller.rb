class RegistrationsController < Devise::RegistrationsController
  def after_update_path_for(resource)
    index_path
  end
end
