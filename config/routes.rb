Rails.application.routes.draw do
  root 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:index, :create, :update, :destroy]
  end
end