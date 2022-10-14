class Disease < ApplicationRecord
    has_many :disease_fields
    has_many :fields, through: :disease_fields

    has_many :posts
    has_many :subscribes
    has_many :subscribed_users, through: :subscribes, source: :users
end
