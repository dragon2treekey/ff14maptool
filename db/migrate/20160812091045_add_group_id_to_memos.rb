class AddGroupIdToMemos < ActiveRecord::Migration
  def change
    add_column :memos, :group_id, :integer
  end
end
