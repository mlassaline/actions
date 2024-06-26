import * as fs from 'fs'
/**
 *
 */
export async function getVersion(config_path: string): Promise<string> {
  return new Promise(resolve => {
    fs.access(config_path, fs.constants.F_OK, err => {
      console.log(`ERROR: No file exists at: ${config_path}`)
      throw err
    })

    let version_info: any = import(config_path)

    resolve(`${version_info.MAJOR}.${version_info.MINOR}.${version_info.PATCH}`)
  })
}
