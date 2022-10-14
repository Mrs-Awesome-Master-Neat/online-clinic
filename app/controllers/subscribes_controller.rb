class SubscribesController < ApplicationController
    def create 
        subscribe=Subscribe.create!(
            user_id: session[:user_id],
            disease_id:params[:group_id]
        )
        render json: subscribe.disease, status: :created
    end
end
