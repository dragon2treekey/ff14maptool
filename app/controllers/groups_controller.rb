class GroupsController < ApplicationController
  def group
    @groups = Group.all.order(:key)
    @group = Group.new
    @mygroups = Group.where(id: current_user.group_id)
  end
end
