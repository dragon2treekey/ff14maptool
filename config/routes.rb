Rails.application.routes.draw do
  devise_for :users
  root 'ff14map#index'
  resources :ff14map_index, only: :index
end
