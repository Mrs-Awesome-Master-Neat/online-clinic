class LikesController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        render json: Like.all
    end

    def show
        like = find_like
        if like
            render json: like
        else
            render_not_found_response
        end
    end

    def create
        like=Like.create!(user_id:session[:user_id],post_id:params[:post_id])
        render json: like.post, status: :created
    end

 

end
