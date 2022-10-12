class UserpSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :post_id

  has_many :posts
end
