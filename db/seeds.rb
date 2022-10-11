puts "Guys are here!"

NormalUser.create(
    first_name: Faker::Name.male_first_name,
    last_name: Faker::Name.last_name,
    user_name:Faker::Internet.username,
    date_of_birth: Date.new(1995,5,4),
    gender: "Male",
    email: Faker::Internet.email,
    password: "123456man",
    password_confirmation: "123456man",
)
NormalUser.create(
    first_name: Faker::Name.female_first_name,
    last_name: Faker::Name.last_name,
    user_name:Faker::Internet.username,
    date_of_birth: Date.new(1999,1,23),
    gender: "Female",
    email: Faker::Internet.email,
    password: "123456babe",
    password_confirmation: "123456babe",
)
puts "And the doctors"
MedicalProfessionalUser.create(
    first_name: Faker::Name.male_first_name,
    last_name: Faker::Name.last_name,
    user_name:Faker::Internet.username,
    date_of_birth: Date.new(1976,8,6),
    gender: "Male",
    email: Faker::Internet.email,
    password: "123456doc",
    password_confirmation: "123456doc",
    profession: "Medical Doctor",
    started_work: Date.new(2007,3,5),
    place_of_work: "Nairobi Hospital"
)
MedicalProfessionalUser.create(
    first_name: Faker::Name.female_first_name,
    last_name: Faker::Name.last_name,
    user_name:Faker::Internet.username,
    date_of_birth: Date.new(1990,11,12),
    gender: "Female",
    email: Faker::Internet.email,
    password: "123456man",
    password_confirmation: "123456man",
    profession: "Nurse",
    started_work: Date.new(2015,3,15),
    place_of_work: "AAR Hospital"
)
puts "We are good!"