namespace :ejemplos_tareas do
  
  desc "Tarea 1: Usa modelos y funciones del proyecto"
  task mi_tarea_1: :environment do
    puts 'Hola'
  end

  desc "Tarea 2: Otra sintaxis para usar ambiente"
  task :mi_tarea_2 => :environment do
    puts 'Hola 2'
  end

  desc "Tarea 3: Uso de argumentos"
  task :mi_tarea_3, [:arg_1] do |t, args|
    puts 'El valor pasado como argumento es ' + args[:arg_1]
  end

  desc "Tarea 4: Ejecuta otras tareas"
  task :mi_tarea_4 do
    Rake::Task["ejemplos_tareas:mi_tarea_1"].invoke
  end

  desc "Tarea 5: Ejecuta otras tareas como requisito"
  task mi_tarea_5: [:mi_tarea_1, :mi_tarea_2] do
    puts 'Hola 3'
  end

  desc "Tarea 6: Seleccionar un post al azar"
  task :mi_tarea_6 => :environment do
    puts "Post seleccionado: #{seleccionar(Post).nombre}"
  end

  # Selecciona una instancia al azar dentro de un modelo
  def seleccionar(modelo)
    modelo.order("RANDOM()").first
  end

end