class CreateUsers < ActiveRecord::Migration[7.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :profession
      t.string :speciality
      t.string :email
      t.string :city

      t.timestamps
    end
  end
end
