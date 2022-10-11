class NormalUserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name,:user_name, :date_of_birth, :gender, :email
end
