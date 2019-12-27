Rails.application.routes.draw do
  root 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:index, :create, :update, :destroy]
    resources :friendships, only: [:create, :destroy, :index, :update]
    resources :likes, only: [:create, :destroy, :index]
  end
end
