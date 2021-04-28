class BooksController < ApplicationController
  # before_action :authorize_request, only: [:create, :update, :destroy]
  before_action :set_book, only: [:show, :update, :destroy]

  # GET /books
  def index
    @books = Book.all

    render json: @books
  end

  # GET /books/1
  def show
    render json: @book, include: :reviews
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_book
      @book = Book.find(params[:id])
    end

  #   # Only allow a list of trusted parameters through.
  #   def book_params
  #     params.require(:book).permit(:title, :author, :genre, :release_date, :img_url, :synopsis)
  #   end
end
