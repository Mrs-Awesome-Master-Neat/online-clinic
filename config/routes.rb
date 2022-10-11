Rails.application.routes.draw do
  resources :disease_fields
  resources :fields
  resources :diseases
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
