class SpeciesYearsController < ApiController
  before_action :set_species_year, only: [:show, :update, :destroy]

  # GET /species_years
  def index
    @species_years = SpeciesYear.get_enigma_collections

    render json: @species_years
  end

  # GET /species_years/1
  def show
    render json: @species_year
  end

  # POST /species_years
  def create
    @species_year = SpeciesYear.new(species_year_params)

    if @species_year.save
      render json: @species_year, status: :created, location: @species_year
    else
      render json: @species_year.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /species_years/1
  def update
    if @species_year.update(species_year_params)
      render json: @species_year
    else
      render json: @species_year.errors, status: :unprocessable_entity
    end
  end

  # DELETE /species_years/1
  def destroy
    @species_year.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_species_year
      @species_year = SpeciesYear.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def species_year_params
      params.require(:species_year).permit(:species_id, :year_id)
    end
end
