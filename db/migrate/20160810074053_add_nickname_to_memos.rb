class AddNicknameToMemos < ActiveRecord::Migration
  def change
    add_column :memos, :name, :string
  end
end
