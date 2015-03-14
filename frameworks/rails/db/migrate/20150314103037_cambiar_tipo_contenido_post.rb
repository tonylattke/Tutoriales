class CambiarTipoContenidoPost < ActiveRecord::Migration
  def change
    change_column :posts, :contenido, :text, :limit => 4294967296
  end
end
