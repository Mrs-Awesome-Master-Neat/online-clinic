class MedicalProfessionalUserSerializer < ActiveModel::Serializer
  attributes :id,:first_name, :last_name,:user_name, :type,
  :date_of_birth, :gender, :email, :profession,:started_work,:place_of_work

  has_many :diseases
  has_many :posts
  has_many :liked_posts
  has_many :feeds
end
