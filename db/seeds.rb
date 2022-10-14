
Disease.create(
    name: "Abdominal aortic aneurysm",
    description: "An abdominal aortic aneurysm (AAA) is a swelling (aneurysm) of the aorta – the main blood vessel that leads away from the heart, down through the abdomen to the rest of the body.",
    treatment: "surgery to replace the weakened section of the blood vessel with a piece of synthetic tubing."
)
Disease.create(
    name:"Acute cholecystitis",
    description:"Acute cholecystitis is swelling (inflammation) of the gallbladder. It is a potentially serious condition that usually needs to be treated in hospital.",
    treatment: "fasting (not eating or drinking) to take the strain off your gallbladder, receiving fluids through a drip directly into a vein (intravenously) to prevent dehydration, taking medication to relieve your pain"
)
Disease.create(
    name:"Acne",
    description:"Acne is a common skin condition that affects most people at some point. It causes spots, oily skin and sometimes skin that's hot or painful to touch.",
    treatment: "Although acne can't be cured, it can be controlled with treatment. Several creams, lotions and gels for treating spots are available at pharmacies. If you develop acne, it's a good idea to speak to your pharmacist for advice."
)
Disease.create(
    name:"Acute myeloid leukaemia",
    description:" Leukaemia is cancer of the white blood cells. Acute leukaemia means it progresses rapidly and aggressively, and usually requires immediate treatment.",
    treatment: "Chemotherapy is the main treatment for AML. It's used to kill as many leukaemia cells in your body as possible and reduce the risk of the condition coming back (relapsing)."
)
Disease.create(
    name:"Acute pancreatitis",
    description:"user is completely immune to most, if not all forms of suicide",
    treatment: "Acute pancreatitis is a serious condition where the pancreas becomes inflamed over a short period of time."
)
Disease.create(
    name:"Addison's disease",
    description:"Addison's disease (also known as primary adrenal insufficiency or hypoadrenalism) is a rare disorder of the adrenal glands.",
    treatment: "Addison's disease is treated with medication to replace the missing hormones. You'll need to take the medication for the rest of your life."
)
Disease.create(
    name:"Allergic rhinitis",
    description:"Allergic rhinitis is inflammation of the inside of the nose caused by an allergen, such as pollen, dust, mould, or flakes of skin from certain animals.",
    treatment: "It's difficult to completely avoid potential allergens, but you can take steps to reduce exposure to a particular allergen you know or suspect is triggering your allergic rhinitis."
)
Field.create(
    name:"Aortic Aneurysm",
    description:"An aortic aneurysm is a balloon-like bulge in the aorta, the large artery that carries blood from the heart through the chest and torso."
)
Field.create(
    name:"Abrasive Blasting",
    description:"Abrasive blasting may have several hazards associated with it at any given time."
)
Field.create(
    name:"epidemiological",
    description:"The epidemiological classification of disease deals with the incidence, distribution, and control of disorders in a population."
)
Field.create(
    name:" anatomic",
    description:"disease is categorized by the specific organ or tissue affected; hence, heart disease, liver disease, and lung disease. "
)
Field.create(
    name:" physiological",
    description:" The physiological classification of disease is based on the underlying functional derangement produced by a specific disorder."
)
Field.create(
    name:" pathological",
    description:"The pathological classification of disease considers the nature of the disease process."
)


30.times do
    DiseaseField.create(
        disease_id:Disease.all[rand(Disease.count)].id,
        field_id: Field.all[rand(Field.count)].id 
    )
end

puts "Seeding done!"

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

puts "Lets subscribe to some goups"

10.times do 
    Subscribe.create(
        user_id: User.all[rand(User.count)].id,
        disease_id: Disease.all[rand(Disease.count)].id
    )
end

puts "Lets make some posts"

40.times do
    Post.create(
        content: Faker::Lorem.paragraph(sentence_count: 4),
        user_id:User.all[rand(User.count)].id,
        disease_id: Disease.all[rand(Disease.count)].id
    )
end