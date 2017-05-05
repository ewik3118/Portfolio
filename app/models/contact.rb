class Contact < MailForm::Base
	# include ActiveModel::Validations
 #    include ActiveModel::Conversion
 #    extend ActiveModel::Naming

    	# attr_accessor :name, :surname, :phone,  :email, :message_text
attribute :name
attribute :surname
attribute :phone
attribute :email
attribute :message_text




    # Set validation rules
    # validates_presence_of :name, message: :bad_empty_name 
    validates_presence_of :surname, message: :bad_empty_surname 
    validates_presence_of :phone, message: :bad_empty_phone
    validates_presence_of :email, message: :bad_empty_email
    validates_presence_of :message_text, message: :bad_empty_message

    # dupa = false

    # if :name.empty?

    #   validates :name, length: { in: 2..20 }, format: { with: /\A[a-zA-Z]+\z/}

    #   end 
      # validates_length_of :name, :maximum => 20, message: :bad_name
        # validates :surname, length: { in: 1..30, message: :bad_long_surname }, presence: {strict: false, message: :bad_empty_surname},format: { with: /\A[a-zA-Z]+\z/,
    # message: :bad_format_surname }
    
    # def initialize(attributes = {})
    #   attributes.each do |name, value|
    #     send("#{name}=", value)
    #   end
    # end

    # def persisted?
    #   false
    # end


	validates_presence_of :name, message: :bad_empty_name 
             validates_length_of :surname, minimum: 2 , message: :bad_long_short_surname, if: "!surname.blank?"

	 	     validates_length_of :surname, maximum: 30 , message: :bad_long_surname, if: "!surname.blank?"
	  		 validates_format_of :surname,  with: /\A[a-zA-ZĄĆĘŚŹŻŁÓŃęąśćżźłóń \-]+\z/, message: :bad_format_surname, if: "!surname.blank?"

             validates_length_of :surname, minimum: 2 , message: :bad_long_short_name, if: "!surname.blank?"

	 	     validates_length_of :name, maximum: 30 , message: :bad_long_name, if: "!name.blank?"
	  		 validates_format_of :name,  with: /\A[a-zA-ZĄĆĘŚŹŻŁÓŃęąśćżźłóń \-]+\z/, message: :bad_format_name, if: "!name.blank?" 


			validates_length_of :phone, minimum: 7 , message: :bad_long_short_phone, if: "!phone.blank?"
			validates_length_of :phone, maximum: 16 , message: :bad_long_phone, if: "!phone.blank?"
	  		validates_format_of :phone,  with: /\A[0-9]+\z/, message: :bad_format_phone, if: "!phone.blank?"

			validates_length_of :email, minimum: 7 , message: :bad_long_short_email, if: "!email.blank?"
			validates_length_of :email, maximum: 30 , message: :bad_long_email, if: "!email.blank?"
	  		validates_format_of :email,  with: /\b[A-Z0-9._%a-z\-]+@(?:[A-Z0-9a-z\-]+\.)+[A-Za-z]{2,4}\z/, message: :bad_format_email, if: "!email.blank?"

			validates_length_of :message_text, minimum: 5 , message: :bad_long_short_message, if: "!message_text.blank?"
			validates_length_of :message_text, maximum: 1000 , message: :bad_long_message, if: "!message_text.blank?"


# def email
	
# end

# def message
# end


# def valMaxLength(field)
# 	  validates_length_of field, :maximum => 10  
# end

# def valMinLength(field)
# 	  validates_length_of field, :minimum => 1  
# end
# def registration_confirmation(user)
#     @user = user # zmiennej instancji użyjemy w szablonie emaila
#     attachments["rails.png"] = File.read("#{Rails.root}/public/images/rails.png")
#     mail(:to => user.email, :subject => "Registered")
#   end    
def headers
	{
:subject => "Contact form",  
:to => "ewik3118@wp.pl",
:from => %("#{email}")
}
end
end
