# File Opload OneDrive

Upload to OneDrive Share Point, to SharePoint Online using the `spsave` package.

## Inputs

`SITE_URL`: Destination SPO site URL  
`CLIENT_ID`: Client Id
`CLIENT_SECRET`: Client Secret
`REALM`: Tenant Id
`DESTINATION_PATH`: Relative destination path on SPO site. If path does not exist, it will be created.  
`SOURCE_PATH`: Source file path(s) to be uploaded to SPO. Separate multiple files using a semicolon `;`.  

## Assumptions

- Files are directly uploaded via the `glob` method in the `spsave` package.
- Follow [node-sp-auth](https://github.com/s-KaiNet/node-sp-auth/wiki/SharePoint-Online-addin-only-authentication) docs to generate client id and secret
- Multiple files are uploaded to the same destination path.

## Example Usage

```yaml
...


- name: OD SP File Upload
  uses: german1311/file-upload-one-drive@v0.91
  with:
    SITE_URL: https://domain.sharepoint.com/sites/my-site
    CLIENT_ID: ${{ secrets.SPO_USERNAME }}
    CLIENT_SECRET: ${{ secrets.SPO_PASSWORD }}
    REALM: '1231231231231'
    DESTINATION_PATH: 'Shared Documents'
    SOURCE_PATH: dist/my-file.txt
    # or for multiple files
    # SOURCE_PATH: dist/my-file1.txt;dist/my-file2.txt

...
```