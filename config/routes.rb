Rails.application.routes.draw do
  resources :species_locations
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  get '/api/species_loc/:id', to: 'species#show_loc'
  get '/api/locations/getmap/:id', to: 'locations#getmap'
  get '/api/locations/getspecies/:id', to: 'locations#getspecies'
  
  scope '/api' do
    resources :years, :species, :locations
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
