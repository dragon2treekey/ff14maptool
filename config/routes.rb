Rails.application.routes.draw do
  devise_for :users
  root 'ff14map#index'
  resources :ff14map_index, only: :index
  get 'g8map' => 'memos#g8map_kanri'
  get 'group' => 'groups#group'
  resources :memos, only: [:create, :destroy]
end
