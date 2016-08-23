Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'registrations'}
  root 'ff14map#rp'
  resources :memos, only: [:create, :destroy, :update]
  get 'index' => 'ff14map#index'
  get 'news1' => 'ff14map#news1'
  get 'how_to' => 'ff14map#how_to'
  get 'g8map' => 'memos#g8map_kanri'
  get 'group' => 'groups#group'
end
