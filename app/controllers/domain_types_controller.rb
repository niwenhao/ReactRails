class DomainTypesController < ApplicationController
  before_action :set_domain_type, only: [:show, :edit, :update, :destroy]

  # GET /domain_types
  # GET /domain_types.json
  def index
    @domain_types = DomainType.all
  end

  # GET /domain_types/1
  # GET /domain_types/1.json
  def show
  end

  # GET /domain_types/new
  def new
    @domain_type = DomainType.new
  end

  # GET /domain_types/1/edit
  def edit
  end

  # POST /domain_types
  # POST /domain_types.json
  def create
    @domain_type = DomainType.new(domain_type_params)

    respond_to do |format|
      if @domain_type.save
        format.html { redirect_to @domain_type, notice: 'Domain type was successfully created.' }
        format.json { render :show, status: :created, location: @domain_type }
      else
        format.html { render :new }
        format.json { render json: @domain_type.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /domain_types/1
  # PATCH/PUT /domain_types/1.json
  def update
    respond_to do |format|
      if @domain_type.update(domain_type_params)
        format.html { redirect_to @domain_type, notice: 'Domain type was successfully updated.' }
        format.json { render :show, status: :ok, location: @domain_type }
      else
        format.html { render :edit }
        format.json { render json: @domain_type.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /domain_types/1
  # DELETE /domain_types/1.json
  def destroy
    @domain_type.destroy
    respond_to do |format|
      format.html { redirect_to domain_types_url, notice: 'Domain type was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_domain_type
      @domain_type = DomainType.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def domain_type_params
      params.require(:domain_type).permit(:name, :description)
    end
end
