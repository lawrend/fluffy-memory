Rails.application.routes.draw do

  get '/api/species_loc/:id', to: 'species#show_loc'
  get '/api/locations/getmap/:id', to: 'locations#get_map'
  get '/api/locations/getspecies/:id', to: 'locations#get_species'
  get '/api/locationsbystate', to: 'locations#locations_by_state'
  get '/api/states/locations/:name', to: 'states#state_locations'
  get '/api/states/sel_st_map/:name', to: 'states#state_map'
  get '/api/states/locationsdropdown', to: 'states#states_for_dropdown'

  scope '/api' do
    resources :species, :locations,
      :species_locations
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
