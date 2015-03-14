class AgregarAutorAPost < ActiveRecord::Migration
  def change
    add_column :posts, :autor, :string, :default => "Tony"
  end
end
