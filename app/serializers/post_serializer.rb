class PostSerializer < ActiveModel::Serializer
  attributes :id, :content, :author,:group

  has_many :comments
end
