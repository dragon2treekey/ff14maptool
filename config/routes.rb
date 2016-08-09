Rails.application.routes.draw do
  devise_for :users
  root 'ff14map#index'
  resources :ff14map_index, only: :index
  get 'g8map' => 'ff14map#g8map_kanri'
end
