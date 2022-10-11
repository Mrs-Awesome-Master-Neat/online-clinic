class DiseasesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        diseases = Disease.all
        render json: diseases, status: :ok
    end

    def show
        disease = find_disease
        render json: disease, status: :ok
    end


    private

    def find_disease
        Disease.find_by!(id: params[:id])

    end

    def render_not_found_response
        render json: { error: "Disease not found" }, status: :not_found
    end
end
