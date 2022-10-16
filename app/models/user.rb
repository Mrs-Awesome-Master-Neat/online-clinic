class User < ApplicationRecord
    include OrderableByTimestamp
    
    has_secure_password
    validates :user_name, uniqueness:{case_sensitive: false}


    has_many :subscribes
    has_many :diseases, through: :subscribes do
        # def missing(reload=false)
            # @missing_diseases = nil if reload
            # @missing_diseases ||= proxy_owner.notiftype_ids.empty? ?
            #   Disease.all : 
            #   Disease.where("id NOT IN (?)", proxy_owner.notiftype_ids)
        # end
    end



    has_many :feeds, through: :diseases, source: :posts

    has_many :likes
    has_many :posts

    has_many :liked_posts, ->{distinct}, through: :likes, source: :post
    

    def groups_not_subscribed
        Disease.where("id NOT IN (?)", self.diseases.map(&:id))
    end
end
