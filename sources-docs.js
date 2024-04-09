module.exports = [
  {
    resolve: 'gatsby-source-git',
    options: {
      name: 'docs--5',
      remote: 'https://github.com/silverstripe/developer-docs.git',
      branch: '5.2',
      patterns: 'en/**'
    }
  },
  {
    resolve: 'gatsby-source-git',
    options: {
      name: 'docs--5--optional_features/linkfield',
      remote: 'https://github.com/silverstripe/silverstripe-linkfield.git',
      branch: '4.0',
      patterns: 'docs/en/!(userguide)/**'
    }
  },
  {
    resolve: 'gatsby-source-git',
    options: {
      name: 'docs--5--optional_features/userforms',
      remote: 'https://github.com/silverstripe/silverstripe-userforms.git',
      branch: '6.2',
      patterns: 'docs/en/!(userguide)/**'
    }
  },
  {
    resolve: 'gatsby-source-git',
    options: {
      name: 'docs--5--optional_features/elemental',
      remote: 'https://github.com/silverstripe/silverstripe-elemental.git',
      branch: '5.2',
      patterns: 'docs/en/!(userguide)/**'
    }
  },
  {
    resolve: 'gatsby-source-git',
    options: {
      name: 'docs--5--optional_features/mfa',
      remote: 'https://github.com/silverstripe/silverstripe-mfa.git',
      branch: '5.2',
      patterns: 'docs/en/!(userguide)/**'
    }
  },
  {
    resolve: 'gatsby-source-git',
    options: {
      name: 'docs--5--optional_features/mfa/authenticators/totp-authenticator',
      remote: 'https://github.com/silverstripe/silverstripe-totp-authenticator.git',
      branch: '5.2',
      patterns: 'docs/en/!(userguide)/**'
    }
  },
  {
    resolve: 'gatsby-source-git',
    options: {
      name: 'docs--5--optional_features/mfa/authenticators/webauthn-authenticator',
      remote: 'https://github.com/silverstripe/silverstripe-webauthn-authenticator.git',
      branch: '5.2',
      patterns: 'docs/en/!(userguide)/**'
    }
  },
  {
    resolve: 'gatsby-source-git',
    options: {
      name: 'docs--4',
      remote: 'https://github.com/silverstripe/developer-docs.git',
      branch: '4.13',
      patterns: 'en/**'
    }
  },
  {
    resolve: 'gatsby-source-git',
    options: {
      name: 'docs--3',
      remote: 'https://github.com/silverstripe/developer-docs.git',
      branch: '3',
      patterns: 'en/**'
    }
  },
];
