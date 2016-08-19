class GroupsController < ApplicationController
  def group
    if user_signed_in?
      @mygroups = Group.where(id: current_user.group_id)

    else
      @groups = Group.all.order(:key)
      @group = Group.new
    end
  end
end
