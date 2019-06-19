class StatesController < ApiController
  before_action :set_state, only: [:state_locations, :show]

  def index
    @states = State.all
    render json: @states
  end

  def show
    render json: @state
  end

  def state_locations
    @locations = @state.locations
    render json: @locations
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