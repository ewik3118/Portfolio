class SendEmailMailer < ActionMailer::Base


  default to: ""

  def welcome_email(contact)
    @contact = contact
    mail(to: @contact.email, subject: @contact.message)
  end

  def new_message(message)
    @message = message
  end

end
