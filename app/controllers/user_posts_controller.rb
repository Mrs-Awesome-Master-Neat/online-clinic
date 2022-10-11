class UserPostsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response


    def create
        userpost = UserPost.create(userpost_params)
        render json: userpost.post, serializer: UserPSerializer, status: :created
    end

        

    private

    def userpost_params
        params.permit(:content)
    end

    def unprocessable_entity_response(invalid)
        render json: {error: invalid.record.errors}, status: :unprocessable_entity
    end
end
