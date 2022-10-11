class CreateDiseaseFields < ActiveRecord::Migration[7.0]
  def change
    create_table :disease_fields do |t|
      t.integer :disease_id
      t.integer :field_id

      t.timestamps
    end
  end
end
