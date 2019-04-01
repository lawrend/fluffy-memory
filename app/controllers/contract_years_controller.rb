class ContractYearsController < ApiController
  before_action :set_contract_year, only: [:show, :update, :destroy]

  # GET /contract_years
  def index
    @contract_years = ContractYear.all

    render json: @contract_years
  end

  # GET /contract_years/1
  def show
    render json: @contract_year
  end

  # POST /contract_years
  def create
    @contract_year = ContractYear.new(contract_year_params)

    if @contract_year.save
      render json: @contract_year, status: :created, location: @contract_year
    else
      render json: @contract_year.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /contract_years/1
  def update
    if @contract_year.update(contract_year_params)
      render json: @contract_year
    else
      render json: @contract_year.errors, status: :unprocessable_entity
    end
  end

  # DELETE /contract_years/1
  def destroy
    @contract_year.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_contract_year
      @contract_year = ContractYear.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def contract_year_params
      params.require(:contract_year).permit(:contracts_id, :years_id)
    end
end
