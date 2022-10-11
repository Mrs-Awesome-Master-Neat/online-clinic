class UsersController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    #def create

    def users_index
        render json: NormalUser.all, status: :ok
    end

    def professionals_index
        render json: MedicalProfessionalUser.all, status: :ok
    end

    def users_show
        user=NormalUser.find_by!(id: params[:id])
        render json: user, status: :ok
    end

    def professionals_show
        user=MedicalProfessionalUser.find_by!(id: params[:id])
    end

    def update
    end

    def upgrade
        user=NormalUser.find_by!(id: session[:user_id])
        user=user.becomes(MedicalProfessionalUser)
        user.type="MedicalProfessional"
        user.update!(professionals_params)

        render json: user, status: :accepted
    end

    private
    def render_not_found_response
        render json: {error: "User not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end

    def user_params
        params.permit :first_name, :last_name, :date_of_birth, 
        :gender, :email,:user_name,:password,:password_confirmation
    end

    def professionals_params
        params.permit :profession, :started_work,:place_of_work,:first_name, :last_name, :date_of_birth, 
        :gender, :email,:user_name,:password,:password_confirmation
    end


end
