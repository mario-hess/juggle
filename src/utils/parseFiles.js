import * as mmb from 'music-metadata-browser'

const getMetadata = async (file) => {
  try {
    const metadata = await mmb.parseBlob(file, { native: true })
    return metadata
  } catch (error) {
    console.log(error)
  }
}

export const parseFiles = async (files) => {
  const filePromises = Object.values(files).map((file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = async (event) => {
        try {
          const metadata = await getMetadata(file)
          const source = event.target.result
          const response = { metadata, source }

          resolve(response)
        } catch (err) {
          reject(err)
        }
      }
      reader.onerror = (error) => {
        reject(error)
      }
      reader.readAsDataURL(file)
    })
  })

  const fileInfos = await Promise.all(filePromises)

  return fileInfos
}
