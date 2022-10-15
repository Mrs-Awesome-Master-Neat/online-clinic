class LikesController < ApplicationController
    before_action :authorize
  
    def create_or_destroy
        like=Like.find_by(user_id:session[:user_id],post_id:params[:post_id])
        post=Post.find_by(id:params[:post_id])
        if(like)
            like.destroy
        else
            like=Like.create!(user_id: session[:user_id],post_id:params[:post_id])
        end

        render json: post, status: :created
    end
    private
    def authorize
        render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end

 

end
