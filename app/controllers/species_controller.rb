class SpeciesController < ApiController

  before_action :set_species, only: [:show, :show_loc ]

  # GET /species
  # either get all the species/locations records or make them
  def index

    # if Species.all.count < 2
    #   @new_species = Species.get_enigma_dataset("f2778fbc-47fd-45e3-a01a-936040650096")
    #   @rows = @new_species['table_rows']['rows']
    #   @names = @rows.collect {|r| r[1,5]}
    #   @names.each do |n| 
    #     @animal = Species.find_or_create_by(name: n[0], status: n[1] )
    #     @location = Location.find_or_create_by(loc: n[2], state: n[3], other_states: n[4])
    #     SpeciesLocation.find_or_create_by(species_id: @animal.id, location_id: @location.id)
    #   end
    # end
    @species = Species.all.sort_by{|x| x["name"]}
    render json: @species
  end


  # GET /species/1
  def show
    render json: @species
  end

  def show_loc
    render json: @species.locations
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
  # def update
  #   if @species.update(species_params)
  #     render json: @species
  #   else
  #     render json: @species.errors, status: :unprocessable_entity
  #   end
  # end

  # DELETE /species/1
  # def destroy
  #   @species.destroy
  # end

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

# for wikipedia queries use:
#     en.wikipedia.org/w/index.php?title=TERM
