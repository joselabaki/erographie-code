class EronotesController < ApplicationController


  before_action :authenticate_user!, :only => [:index, :show]


  def index
    @eronotes = Eronote.all
  end

  def show
    @eronote = Eronote.find(params[:id])

  end

  def create
  @eronote = Eronote.new(eronote_params)
  if @eronote.save
  redirect_to "/thanks"
  else
    render 'new'
  end
  end
  def new
    @eronote = Eronote.new
  end

end

def thanks
end

def about
end

  def destroy
  @eronote = Eronote.find(params[:id])
  @eronote.destroy

  redirect_to eronotes_path

end


private

def eronote_params
  params.require(:eronote).permit(:eromage , :body )
end
