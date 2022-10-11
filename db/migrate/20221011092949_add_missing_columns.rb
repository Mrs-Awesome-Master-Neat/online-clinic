class AddMissingColumns < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :user_name, :string
    add_column :users, :profession, :string
    add_column :users, :started_work, :datetime
    add_column :users, :place_of_work, :string
  end
end
