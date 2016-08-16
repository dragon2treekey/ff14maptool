Rails.application.routes.draw do
  devise_for :users
  root 'ff14map#index'
  resources :ff14map_index, only: :index
  resources :memos, only: [:create, :destroy, :update]
  get 'news1' => 'ff14map#news1'
  get 'how_to' => 'ff14map#how_to'
  get 'g8map' => 'memos#g8map_kanri'
  get 'group' => 'groups#group'
end
