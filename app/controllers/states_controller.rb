class StatesController < ApiController
  include ApiHelper

  before_action :set_state, only: [:show]


  def index
    @states = State.all.order("name")
    render json: @states
  end

  def states_for_dropdown
    @states = State.all.order("name")
    @states_options = @states.map do |l|
      {"key" => l.id, "value" => l.name, "text" => l.name}
    end
    render json: @states_options
  end


  def show
    render json: @state
  end

  def state_map
    @new_center = generate_state_map(params[:name])
    render json: @new_center
  end


  def state_locations
    @state = State.find_by(name: params[:name])
    @protected_areas = @state.locations
    # @protected_areas.each do |pa| 
    #   State.add_lat_lng(pa)
    # end
    render json: @protected_areas
  end

  def add_cords_to_st_locations
    @state = State.find_by(name: params[:name])
    @state_locs = @state.locations
    @state_locs.each do |pa|
      add_lat_lng(pa)
    end

    render json: @state_locs

  end



  def state_species
    @state = State.find_by(name: params[:name])
    @species = @state.species.uniq
    render json: @species
  end

  # POST /locations
  def create
    @state = State.new(state_params)

    if @state.save
      render json: @state, status: :created, location: @state
    else
      render json: @state.errors, status: :unprocessable_entity
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_state
    @state = State.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def state_params
    params.require(:state).permit(:name, :abbrev )
  end


end
