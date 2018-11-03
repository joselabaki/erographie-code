class EronotesController < ApplicationController
  def index
    @eronotes = Eronote.all
  end

  def show
    @eronote = Eronote.find(params[:id])

  end

  def create
  @eronote = Eronote.new(eronote_params)
  if @eronote.save
  redirect_to @eronote
  else
    render 'new'
  end
  end



  def new
    @eronote = Eronote.new
  end
end

private

def eronote_params
  params.require(:eronote).permit(:eromage , :body)
end
