class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home]
  def home
    @places = Place.all
  end
  def about
  end
end