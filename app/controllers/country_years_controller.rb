class CountryYearsController < ApiController
  before_action :set_country_year, only: [:show, :update, :destroy]

  # GET /country_years
  def index
    @country_years = CountryYear.get_enigma_collections("11550ebf-e6ba-4bc7-ad84-5d43c18ee291")
    # @country_years = CountryYear.all
    render json: @country_years
  end

  # GET /country_years/1
  def show
    render json: @country_year
  end

  # POST /country_years
  def create
    @country_year = CountryYear.new(country_year_params)

    if @country_year.save
      render json: @country_year, status: :created, location: @country_year
    else
      render json: @country_year.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /country_years/1
  def update
    if @country_year.update(country_year_params)
      render json: @country_year
    else
      render json: @country_year.errors, status: :unprocessable_entity
    end
  end

  # DELETE /country_years/1
  def destroy
    @country_year.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_country_year
      @country_year = CountryYear.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def country_year_params
      params.require(:country_year).permit(:country_id, :year_id)
    end
end
