class MemosController < ApplicationController
  def g8map_kanri
    @memos = Memo.all.order(:text)
    @memo = Memo.new
    @memo.text = "画像を選択してください"
  end

  def create
    Memo.create(memo_params)
    @memos = Memo.all.order(:text)
  end

  def destroy
    Memo.find(params[:id]).destroy
    @memos = Memo.all.order(:text)
  end

  private
  def memo_params
    params.require(:memo).permit(:text, :name)
  end
end
