class DiseaseSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :treatment
end
