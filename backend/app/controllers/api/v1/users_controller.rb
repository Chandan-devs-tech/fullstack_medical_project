# class UsersController < ApplicationController
#   def create
#     user = User.new(user_params)
#     if user.save
#       render json: { status: 'success', user: user }, status: :created
#     else
#       render json: { status: 'error', errors: user.errors.full_messages }, status: :unprocessable_entity
#     end
#   end

#   private

#   def user_params
#     params.require(:user).permit(:name, :profession, :speciality, :email, :city)
#   end
# end

module Api
  module V1
    class UsersController < ApplicationController
      def create
        @user = User.new(user_params)
        if @user.save
          render json: { status: 'success', user: @user }, status: :created
        else
          render json: { status: 'error', errors: @user.errors.full_messages }, status: :unprocessable_entity
        end
      end

      private

      def user_params
        params.require(:user).permit(:name, :profession, :speciality, :email, :city)
      end
    end
  end
end
