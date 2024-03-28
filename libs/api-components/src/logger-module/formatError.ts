export const formatError = (err: Error | string): string => {
  if (err instanceof Error) {
    return `${err.name}: ${err.message}`
  } else {
    return err
  }
}
