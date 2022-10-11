Rails.application.routes.draw do
  resources :disease_fields, only: [:create]
  resources :fields, only: [:index, :show]
  resources :diseases, only:[:index, :show]

  get 'normal_users', to: "users#users_index"
  get 'professionals', to: "users#professionals#index"
  get 'normal_users/:id', to: "users#users_show"
  get 'professionals/:id', to: "users#professionals_show"
  post 'users', to: "users#create"
  patch 'normal_users', to: "users#update_users"
  patch 'professionals', to: "users#update_professionals"
  patch 'users/upgrade', to: "users#upgrade"
end
