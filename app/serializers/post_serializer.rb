class PostSerializer < ActiveModel::Serializer
  attributes :id, :content, :author,:group,:all_likes,:all_comments,:created_at

  has_many :comments
end
