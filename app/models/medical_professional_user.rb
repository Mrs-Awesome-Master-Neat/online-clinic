class MedicalProfessionalUser < User
    validates :profession, presence: true
    validates :started_work, presence: true
end