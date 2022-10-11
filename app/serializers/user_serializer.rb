class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :date_of_birth, :gender, :email, :password_digest
end
