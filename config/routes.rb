Rails.application.routes.draw do
  resources :disease_fields, only: [:create]
  resources :fields, only: [:index, :show]
  resources :diseases, only:[:index, :show]
  
  resources :likes
  resources :comments
  resources :user_posts, only: [:create, :update]
  resources :posts

  post 'sessions', to: "session#create"


  get 'normal_users', to: "users#users_index"
  get 'professionals', to: "users#professionals_index"
  get 'normal_users/:id', to: "users#users_show"
  get 'professionals/:id', to: "users#professionals_show"
  post 'users', to: "users#create"
  patch 'normal_users/:id', to: "users#update_users"
  patch 'normal_users/upgrade/:id', to: "users#upgrade"
end
