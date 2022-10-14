class NormalUserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name,:user_name,:type, :date_of_birth, :gender, :email

  has_many :diseases
  has_many :posts
end
