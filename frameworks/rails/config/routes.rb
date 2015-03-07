Rails.application.routes.draw do
	resources :posts

	root 'bienvenido#index'
end