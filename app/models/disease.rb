class Disease < ApplicationRecord
    has_many :disease_fields
    has_many :fields, through: :disease_fields
end
