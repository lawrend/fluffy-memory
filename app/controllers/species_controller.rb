class SpeciesController < ApiController

  before_action :set_species, only: [:show, :update, :destroy]

  # GET /species
  def index
    # @species = Species.get_enigma_collections
    @species = Species.get_enigma_dataset("f2778fbc-47fd-45e3-a01a-936040650096")
    # @species = Species.all

    # render json: @species

    # @fields = @species['table_rows']['fields']
    # render json: @fields
    @rows = @species['table_rows']['rows']
    @names = @rows.collect {|r| r[1,3]}
    @just_names = @names.collect {|r| r[0]}
    @names.each {|n| Species.find_or_create_by(name: n[0], status: n[1], location: n[2])}
    # @names.each {|n| Species.create(name: [0])}
    # render json: @rows
    # render json: @names
    render json: @just_names 
    
  end

  # GET /species/1
  def show
    render json: @species
  end

  # POST /species
  def create
    @species = Species.new(species_params)

    if @species.save
      render json: @species, status: :created, location: @species
    else
      render json: @species.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /species/1
  def update
    if @species.update(species_params)
      render json: @species
    else
      render json: @species.errors, status: :unprocessable_entity
    end
  end

  # DELETE /species/1
  def destroy
    @species.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_species
      @species = Species.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def species_params
      params.require(:species).permit(:name, :location)
    end
end
