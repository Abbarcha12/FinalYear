import nodemailer from 'nodemailer';
import Patient from '@/models/patientMode';
import Organization from '@/models/organizationModel';
import Donor from '@/models/donorModel';
import bcryptjs from 'bcryptjs';

export const sendEmail = async ({ email, emailType, id }) => {
  try {
    // Determine the user type based on the email
    const donorUser = await Donor.findOne({ id });
    const organizationUser = await Organization.findOne({ email });
    const patientUser = await Patient.findOne({ email });

    if (!donorUser && !organizationUser && !patientUser) {
      // User not found
      throw new Error('User not found');
    }

    // Choose the user based on the model where they are found
    const user = donorUser || organizationUser || patientUser;

    // Create a hashed token
    const hashedToken = await bcryptjs.hash(id.toString(), 10);

    if (emailType === 'VERIFY') {
      await user.findByIdAndUpdate(user._id, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === 'RESET') {
      await user.findByIdAndUpdate(user._id, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    const transport = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: 'f7c22b24f73b4b',
        pass: 'ea94601a9a4dd7',
      },
    });

    const mailOptions = {
      from: 'abrarakbar2002@gmail.com',
      to: email,
      subject: emailType === 'VERIFY' ? 'Verify your email' : 'Reset your password',
      html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${
        emailType === 'VERIFY' ? 'verify your email' : 'reset your password'
      }
      or copy and paste the link below in your browser. <br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
      </p>`,
    };

    const mailResponse = await transport.sendMail(mailOptions);
    return mailResponse;
  } catch (error) {
    throw new Error(error.message);
  }
};
