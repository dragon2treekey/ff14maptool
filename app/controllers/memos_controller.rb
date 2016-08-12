class MemosController < ApplicationController
  def g8map_kanri
    @memos = Memo.where(group_id: current_user.group_id).order(:text)
    @memo = Memo.new
    @memo.text = "画像を選択してください"
  end

  def create
    Memo.create(text: memo_params[:text], name: memo_params[:name], group_id: current_user.group_id)
    @memos = Memo.where(group_id: current_user.group_id).order(:text)
  end

  def destroy
    Memo.find(params[:id]).destroy
    @memos = Memo.where(group_id: current_user.group_id).order(:text)
  end

  private
  def memo_params
    params.require(:memo).permit(:text, :name)
  end
end
