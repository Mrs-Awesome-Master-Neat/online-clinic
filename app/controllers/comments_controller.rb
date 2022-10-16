class CommentsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    def create
        comment = Comment.create!(
            user_id: session[:user_id],
            post_id: params[:post_id],
            text: params[:text]
        )
        render json: comment.post, status: :created
    end

    def update
        comment = find_comment
        comment.update(comment_params)
        render json: comment.post, status: :updated
    end

    def destroy
        comment = find_comment
        comment.destroy
        head :no_content
    end
    private
    def comment_params
        params.permit :text
    end

    def find_comment
        Comment.find_by!(id:params[:id])
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end
end
