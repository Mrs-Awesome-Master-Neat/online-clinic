class UsersController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    before_action :authorize
    skip_before_action :authorize, only: [:create]

    def create
        user=User.create!(all_params)
        4.times do
            Subscribe.create(
                user_id: user.id,
                disease_id: Disease.all[rand(Disease.count)].id
            )
        end

        session[:user_id]=user.id

        render json: user, status: :created
    end

    def users_index
        render json: NormalUser.all, status: :ok
    end

    def professionals_index
        render json: MedicalProfessionalUser.all, status: :ok
    end

    def show
        user=User.find_by!(id: session[:user_id])
        render json: user, status: :ok
    end

    def update_users
        user=NormalUser.find_by!(id: session[:user_id])
        user.update!(all_params)
        render json: user, status: :accepted
    end
 
    def upgrade
        user=NormalUser.find_by!(id: session[:user_id])
        user=user.becomes(MedicalProfessionalUser)
        user.type="MedicalProfessional"
        user.update!(all_params)

        render json: user, status: :accepted
    end

    private
    def render_not_found_response
        render json: {error: "User not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def user_params
        params.permit :first_name, :last_name, :date_of_birth,:gender, :email,:user_name,:password,:confirm_password
    end

    def all_params
        params.permit :profession, :started_work,:place_of_work,:first_name, :last_name, :date_of_birth, :gender, :email,:user_name,:password,:password_confirmation
    end

    def authorize
        render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end


end
