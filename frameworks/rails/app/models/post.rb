class Post < ActiveRecord::Base
	validates :nombre, presence: true
end
