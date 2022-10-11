Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :users
  resources :disease_fields, only: [:create]
  resources :fields, only: [:index, :show]
  resources :diseases, only: [:index, :show]
  
  resources :likes
  resources :comments
  resources :user_posts, only: [:create, :update]
  resources :posts

end
