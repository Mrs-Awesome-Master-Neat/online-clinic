Rails.application.routes.draw do
  resources :users
  resources :disease_fields, only: [:create]
  resources :fields, only: [:index, :show]
  resources :diseases, only: [:index, :show]
end
