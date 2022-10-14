class AddDiseaseIdToPosts < ActiveRecord::Migration[7.0]
  def change
    add_column :posts, :disease_id,:integer
  end
end
