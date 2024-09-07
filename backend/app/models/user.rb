class User < ApplicationRecord
  # Validations
  validates :name, presence: true, length: { maximum: 100 }
  validates :profession, presence: true
  validates :speciality, presence: true
  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :city, presence: true

  # Callbacks (optional)
  before_save :capitalize_name

  # Methods (optional)
  private

  def capitalize_name
    self.name = name.split.map(&:capitalize).join(' ')
  end
end
