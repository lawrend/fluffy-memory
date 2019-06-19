Rails.application.routes.draw do

  get '/api/species_loc/:id', to: 'species#show_loc'
  get '/api/locations/getmap/:id', to: 'locations#get_map'
  get '/api/locations/getspecies/:id', to: 'locations#get_species'
  get '/api/locationsbystate', to: 'locations#locations_by_state'
  get '/api/states/locations/:id', to: 'states#state_locations'

  scope '/api' do
    resources :species, :locations,
      :species_locations
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
