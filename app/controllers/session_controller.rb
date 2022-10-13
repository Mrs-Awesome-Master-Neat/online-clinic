class SessionController < ApplicationController

    def create
        user = User.find_by(email: params[:user_details]) || User.find_by(user_name:params[:user_details])

        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end
    
    def destroy
        
    end
end
