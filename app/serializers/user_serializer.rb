class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name,:last_name,:user_name, :gender, :email

  has_many :diseases
  has_many :posts
  has_many :liked_posts
  has_many :feeds
end
