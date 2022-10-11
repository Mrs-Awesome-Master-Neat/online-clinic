class DiseaseField < ApplicationRecord
    belongs_to :disease
    belongs_to :field
    validates :disease_id, presence: true
    validates :field_id, presence: true
end
