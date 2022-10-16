Rails.application.routes.draw do
  resources :subscribes,only:[:create]
  resources :disease_fields, only: [:create]
  resources :fields, only: [:index, :show]
  resources :diseases, only:[:index, :show]
  
  resources :comments, only:[:create,:update,:destroy]
  resources :user_posts, only: [:create, :update]
  resources :posts

  post 'sessions', to: "session#create"
  delete "logout", to: "session#destroy"

  post "/likes", to: "likes#create_or_destroy"


  get 'normal_users', to: "users#users_index"
  get 'professionals', to: "users#professionals_index"
  get 'me', to: "users#show"
  post 'users', to: "users#create"
  patch 'normal_users/:id', to: "users#update_users"
  patch 'normal_users/upgrade/:id', to: "users#upgrade"
end
