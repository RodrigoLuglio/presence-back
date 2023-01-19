"use strict";

module.exports = ({env}) => ({
  "entity-relationship-chart": {
    enabled: true,
    config: {
      // By default all contentTypes and components are included.
      // To exlclude strapi's internal models, use:
      exclude: [
        "strapi::core-store",
        "webhook",
        "admin::permission",
        "admin::user",
        "admin::role",
        "admin::api-token",
        "plugin::upload.file",
        "plugin::i18n.locale",
        "plugin::users-permissions.permission",
        "plugin::users-permissions.role",
      ],
    },
  },
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'smtp-relay.sendinblue.com',
        port: 587,
        auth: {
          user: 'rodrigo.luglio@gmail.com',
          pass: 'hVF6gnq5ELYStxNR',
        },
      },
      settings: {
        defaultFrom: 'rodrigo@rlabs.com.br',
        defaultReplyTo: 'rodrigo@rlabs.com.br',
      },
    },
  },
});
