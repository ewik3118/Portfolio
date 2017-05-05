class ContactForm < MailForm::Base
attribute :name , :surname, :email , :phone , :message
  # attribute :name,      :validate => true
  #  attribute :surname,      :validate => true
  # attribute :email,     :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  # attribute :phone,     :validate => true
  # attribute :message,   :validate => true

validates :name, :presence => true
# validates :name, :uniqueness => true


  # attribute :file,      :attachment => true
  # validate :test


  # Declare the e-mail headers. It accepts anything the mail method
  # in ActionMailer accepts.
  def headers
    {
        :subject => "My Contact Form",
        :to => "admin@localhost",
        :from => %("#{name}" <#{email}>)
    }
  end

  # def test
  #   if file.present?
  #     if file.size > 10.megabytes
  #       self.errors.add(:file, "File is too big! ")
  #     end
  #     if !(file.original_filename =~ %r{\.(png|jpg|jpeg|pdf)\z}i)
  #       self.errors.add(:file, "Wrong format, it should be png | jpg | jpeg | pdf")
  #     end
  #   end
  # end

end
