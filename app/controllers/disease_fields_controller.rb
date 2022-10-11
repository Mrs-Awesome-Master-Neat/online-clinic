class DiseaseFieldsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response
    
    def create
        disease_field = DiseaseField.create!(disease_field_params)
        render json: disease_field, status: :created

    end

    private

    def disease_field_params
        params.permit(:disease_id, :field_id)
    end

    def unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
