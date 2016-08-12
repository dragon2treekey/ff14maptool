class GroupsController < ApplicationController
  def group
    @groups = Group.all.order(:key)
    @group = Group.new
  end
end
