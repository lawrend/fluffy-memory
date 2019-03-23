# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') 

Country.create(name: 'Afghanistan', currency: 'Afghani', isocode: 'AFG')
Country.create(name: 'Albania', currency: 'Lek', isocode: 'ALB')
Year.create(year: 1975)
Year.create(year: 1976)
Year.create(year: 1977)
Year.create(year: 1978)
Year.create(year: 1979)

