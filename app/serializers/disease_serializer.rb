class DiseaseSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :treatment

  has_many :posts
end
