class Ff14mapController < ApplicationController
  before_action :authenticate_user!, :only => [:g8map_kanri]

  def index
  end

  def g8map_kanri
  end
end
