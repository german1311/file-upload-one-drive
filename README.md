# File Opload OneDrive

Upload to OneDrive Share Point, to SharePoint Online using the `spsave` package.

## Inputs

`site_url`: Destination SPO site URL  
`clientId`: Client Id
`clientSecret`: Client Secret
`realm`: Tenant Id
`destination_path`: Relative destination path on SPO site. If path does not exist, it will be created.  
`source_path`: Source file path(s) to be uploaded to SPO. Separate multiple files using a semicolon `;`.  

## Assumptions

- Files are directly uploaded via the `glob` method in the `spsave` package.
- Follow [node-sp-auth](https://github.com/s-KaiNet/node-sp-auth/wiki/SharePoint-Online-addin-only-authentication) docs to generate client id and secret
- Multiple files are uploaded to the same destination path.

## Example Usage

```yaml
...

uses: file-upload-one-drive/file-upload-one-drive@v1
with:
  site_url: https://domain.sharepoint.com/sites/my-site
  clientId: ${{ secrets.SPO_USERNAME }}
  clientSecret: ${{ secrets.SPO_PASSWORD }}
  realm: '1231231231231'
  destination_path: 'Shared Documents'
  source_path: dist/my-file.txt
  # or for multiple files
  # source_path: dist/my-file1.txt;dist/my-file2.txt

...
```