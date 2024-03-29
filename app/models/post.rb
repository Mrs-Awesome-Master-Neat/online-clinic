class Post < ApplicationRecord
    has_many :likes
    has_many :comments
    belongs_to :user
    belongs_to :disease

    def author
        self.user.user_name
    end
    
    def group
        self.disease.name
    end
end
