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

 

end
