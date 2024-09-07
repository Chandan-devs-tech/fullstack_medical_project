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
      # Create a new user
      def create
        @user = User.new(user_params)
        if @user.save
          render json: { status: 'success', user: @user }, status: :created
        else
          render json: { status: 'error', errors: @user.errors.full_messages }, status: :unprocessable_entity
        end
      end

      # List all users
       def index
        @users = User.all
        render json: { status: 'success', users: @users }, status: :ok
      end

      # Show a user
      def show
        @user = User.find(params[:id])
        if @user
          render json: { status: 'success', user: @user }, status: :ok
        else
          render json: { status: 'error', message: 'User not found' }, status: :not_found
        end
      end

      # Update a user
      def update
        @user = User.find(params[:id])
        if @user.update(user_params)
          render json: { status: 'success', user: @user }, status: :ok
        else
          render json: { status: 'error', errors: @user.errors.full_messages }, status: :unprocessable_entity
        end
      end

      # Delete a user
      def destroy
        @user = User.find(params[:id])
        if @user.destroy
          render json: { status: 'success', message: 'User deleted successfully' }, status: :ok
        else
          render json: { status: 'error', message: 'Failed to delete user' }, status: :unprocessable_entity
        end
      end

      private

      def user_params
        params.require(:user).permit(:name, :profession, :speciality, :email, :city)
      end
    end
  end
end
