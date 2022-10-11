class FieldsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        fields = Field.all
        render json: fields, status: :ok
    end

    def show
        field = find_field
        render json: field, status: :ok
    end


    private

    def find_field
        Field.find_by!(id: params[:id])

    end

    def render_not_found_response
        render json: { error: "Field not found" }, status: :not_found
    end
end
