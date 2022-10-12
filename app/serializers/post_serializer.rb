class PostSerializer < ActiveModel::Serializer
  attributes :id, :content

  has_many :likes
  has_many :comments
end
