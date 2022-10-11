class User < ApplicationRecord
    has_secure_password
    validates :user_name, uniqueness:{case_sensitive: false}
end
