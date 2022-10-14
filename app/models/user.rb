class User < ApplicationRecord
    has_secure_password
    validates :user_name, uniqueness:{case_sensitive: false}

    has_many :posts

    has_many :subscribes
    has_many :diseases, through: :subscribes

    # has_many :likes
    # has_many :liked_posts, through: :likes, source: :products
end
