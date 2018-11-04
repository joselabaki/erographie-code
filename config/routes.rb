Rails.application.routes.draw do

  devise_for :users
  resources :eronotes
    get '/thanks' => 'eronotes#thanks'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'eronotes#new'
end
