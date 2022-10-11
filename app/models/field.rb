class Field < ApplicationRecord
    has_many :disease_fields
    has_many :diseases, through: :disease_fields
end
