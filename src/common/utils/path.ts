export const removeSlashFromPath = (path: string) => {
  if (path.startsWith("/")) {
    return path.substring(1)
  }

  return path
}
