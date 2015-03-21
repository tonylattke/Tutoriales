Rails.application.routes.draw do
	mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
	
	devise_for :users
	resources :posts

	root 'bienvenido#index'
end