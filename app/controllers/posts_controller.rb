class PostsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        render json: Post.all
    end

    def show
        post = find_post
        if post
            render json: post
        else
            render_not_found_response
        end
    end

    def create
        post = Post.create!(post_params)
        render json: post, status: :created
    end

    def update
        post = find_post
        post.update(post_params)
        render json: post
    end

    def destroy
        post = find_post
        post.destroy
        head :no_content
    end

    private
    
    def find_post
        Post.find(params[:id])
    end

    def post_params
        params.permit(:content)
    end

    def render_not_found_response
        render json: {error: "Post not found"}, status: :not_found
    end

end

