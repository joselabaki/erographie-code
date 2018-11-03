Rails.application.routes.draw do

  resources :eronotes
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'eronotes#index'
end
