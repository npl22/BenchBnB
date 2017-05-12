Rails.application.routes.draw do
  namespace :api do
    resources :users, only: [:create]
    resources :session, only: [:create, :destroy]
  end

  root to: 'static_pages#root'
end
