module.exports = ({env}) => ({
  email: {
    config: {
      provider: '@strapi/provider-email-mailgun',
      providerOptions: {
        key: env('MAILGUN_API_KEY', '1181d9cb58c0b7a5907e48572ec83229-32a0fef1-66fee221'),
        domain: env('MAILGUN_DOMAIN', 'mg.hostylus.com'),
        //url: env('MAILGUN_URL', 'https://api.mailgun.net'), // Optional
      },
      settings: {
        defaultFrom: 'info@itqancapital.com',
        defaultReplyTo: 'info@itqancapital.com',
      },
    },
  },
  i18n: {
    enabled: true,
  },
});
