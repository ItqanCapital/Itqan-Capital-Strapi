module.exports = {
  async afterCreate(event) {
    const { result } = event;
    
    const emailTemplate = {
      subject: 'New Contact Us Submission',
      text: `
        New Contact Us Submission:
        Name: <%= name %>
        Email: <%= email %>
        Message: <%= message %>
      `,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Us Submission</title>
            <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              background-color: #f4f4f4;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background-color: #36274C;
              padding: 20px;
              text-align: center;
            }
            .logo {
              max-width: 150px;
            }
            .content {
              background-color: #fff;
              padding: 20px;
              border-radius: 5px;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }
            h1 {
              color: #FFFFFF;
              margin-bottom: 20px;
              text-align: center;
            }
            .field {
              margin-bottom: 15px;
            }
            .label {
              font-weight: bold;
              color: #36274C;
            }
            .value {
              color: #333;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              color: #666;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Us Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Name:</span>
                <span class="value"><%= name %></span>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <span class="value"><%= email %></span>
              </div>
              <div class="field">
                <span class="label">Message:</span>
                <p class="value"><%= message %></p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    try {
      await strapi.plugins['email'].services.email.sendTemplatedEmail(
        {
          to: 'info@itqancapital.com',
          from: 'info@itqancapital.com',
        },
        emailTemplate,
        {
          name: result.name,
          email: result.email,
          message: result.message,
        }
      );
      
      console.log('Email sent successfully for new Contact Us submission');
    } catch (err) {
      console.error('Error sending email for Contact Us submission:', err);
    }
  },
};