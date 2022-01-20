const core = require("@actions/core")
const spsave = require("spsave").spsave

try {

  // Get action inputs.
  const siteUrl = core.getInput("site_url")
  const clientId = core.getInput("clientId")
  const clientSecret = core.getInput("clientSecret")
  const realm = core.getInput("realm")
  const destinationPath = core.getInput("destination_path")
  const source_path = core.getInput("source_path").split(";")
  


    // Define SPSave Configuration
  const coreOptions = {
    siteUrl: siteUrl
  }

  const credentials = {
    clientId: clientId,
    clientSecret: clientSecret,
    realm: realm,
  }

  const fileOptions = {
    folder: destinationPath,
    glob: source_path
  }

  // Upload to SPO
  spsave(coreOptions, credentials, fileOptions)
  .catch(err => {
    throw new Error(err)
  })

} catch (error) {

  console.error(error)
  core.setFailed(error)

}