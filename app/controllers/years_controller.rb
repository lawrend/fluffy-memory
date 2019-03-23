class YearsController < ApiController
  before_action :set_year, only: [:show, :update, :destroy]

  # GET /years
  def index
    @years = Year.all

    render json: @years
  end

  # GET /years/1
  def show
    render json: @year
  end

  # POST /years
  def create
    @year = Year.new(year_params)

    if @year.save
      render json: @year, status: :created, location: @year
    else
      render json: @year.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /years/1
  def update
    if @year.update(year_params)
      render json: @year
    else
      render json: @year.errors, status: :unprocessable_entity
    end
  end

  # DELETE /years/1
  def destroy
    @year.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_year
      @year = Year.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def year_params
      params.require(:year).permit(:year)
    end
end
