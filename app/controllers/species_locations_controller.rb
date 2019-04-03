class SpeciesLocationsController < ApplicationController
  before_action :set_species_location, only: [:show, :update, :destroy]

  # GET /species_locations
  def index
    @species_locations = SpeciesLocation.all

    render json: @species_locations
  end

  # GET /species_locations/1
  def show
    render json: @species_location
  end

  # POST /species_locations
  def create
    @species_location = SpeciesLocation.new(species_location_params)

    if @species_location.save
      render json: @species_location, status: :created, location: @species_location
    else
      render json: @species_location.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /species_locations/1
  def update
    if @species_location.update(species_location_params)
      render json: @species_location
    else
      render json: @species_location.errors, status: :unprocessable_entity
    end
  end

  # DELETE /species_locations/1
  def destroy
    @species_location.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_species_location
      @species_location = SpeciesLocation.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def species_location_params
      params.require(:species_location).permit(:species_id, :location_id)
    end
end
