class CommentsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        render json: Comment.all
    end

    def show
        comment = find_comment
        if comment
            render json: comment
        else
            render_not_found_response
        end
    end

    def create
        comment = Comment.create!(comment_params)
        render json: comment, status: :created
    end

    def update
        comment = find_comment
        comment.update(comment_params)
        render json: comment
    end

    def destroy
        comment = find_comment
        comment.destroy
        head :no_content
    end

    private
    
    def find_comment
        Comment.find(params[:id])
    end

    def comment_params
        params.permit(:text)
    end

    def render_not_found_response
        render json: {error: "Comment not found"}, status: :not_found

end
