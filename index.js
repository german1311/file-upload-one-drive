const core = require('@actions/core')
const spsave = require('spsave').spsave

try {
  // Get action inputs.
  const siteUrl = process.env['SITE_URL'] || ''
  const clientId = process.env['CLIENT_ID'] || ''
  const clientSecret = process.env['CLIENT_SECRET'] || ''
  const realm = process.env['REALM']
  const destinationPath = process.env['DESTINATION_PATH']
  const sourcePath = (process.env['SOURCE_PATH'] || '').split(';')

  // Define SPSave Configuration
  const coreOptions = {
    siteUrl: siteUrl
  }

  const credentials = {
    clientId: clientId,
    clientSecret: clientSecret,
    realm: realm
  }

  const fileOptions = {
    folder: destinationPath,
    glob: sourcePath
  }

  // Upload to SPO
  spsave(coreOptions, credentials, fileOptions).catch((err) => {
    throw new Error(err)
  })
} catch (error) {
  console.error(error)
  core.setFailed(error)
}
