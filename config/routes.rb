Rails.application.routes.draw do
  scope "(:locale)" , locale: /#{I18n.available_locales.join("|")}/   do

  devise_for :users
  resources :eronotes
    get '/thanks' => 'eronotes#thanks'
    get '/about' => 'eronotes#about'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    root 'eronotes#new'

  end
end
