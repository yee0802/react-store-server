export default function throwNewError(message, status) {
  const error = new Error(message);

  if (status) {
    error.status = status;
  }

  throw error;
}
