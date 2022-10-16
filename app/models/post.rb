class Post < ApplicationRecord
    has_many :likes
    has_many :comments, ->{order(created_at: :desc)}
    belongs_to :user
    belongs_to :disease

    def author
        self.user.user_name
    end
    
    def group
        self.disease.name
    end

    def all_likes
        self.likes.count
    end

    def all_comments
        self.comments.count
    end
end
