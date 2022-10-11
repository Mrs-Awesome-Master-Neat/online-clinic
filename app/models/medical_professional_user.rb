class MedicalProfessionalUser < User
    validates :profession, presence: true
end