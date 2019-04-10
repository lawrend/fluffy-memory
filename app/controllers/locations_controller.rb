class LocationsController < ApiController
  before_action :set_location, only: [:show ]

  # GET /locations
  # either get all the species/locations records or make them
  def index

    if Location.all.count < 2
      @new_locations = Location.get_enigma_dataset("f2778fbc-47fd-45e3-a01a-936040650096")
      @rows = @new_locations['table_rows']['rows']
      @names = @rows.collect {|r| r[1,5]}
      @names.each do |n| 
        @species = Species.find_or_create_by(name: n[0], status: n[1] )
        @location = Location.find_or_create_by(loc: n[2], state: n[3], other_states: n[4])
        SpeciesLocation.find_or_create_by(species_id: @species.id, location_id: @location.id)
      end
    end
    @locations = Location.all.sort_by{|x| x["state"]}
    render json: @locations
  end

  # GET /locations/1
  def show
    render json: @location
  end

  # POST /locations
  def create
    @location = Location.new(location_params)

    if @location.save
      render json: @location, status: :created, location: @location
    else
      render json: @location.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /locations/1
  # def update
  #   if @location.update(location_params)
  #     render json: @location
  #   else
  #     render json: @location.errors, status: :unprocessable_entity
  #   end
  # end

  # DELETE /locations/1
  # def destroy
  #   @location.destroy
  # end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_location
    @location = Location.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def location_params
    params.require(:location).permit(:loc, :state, :other_states)
  end
end
