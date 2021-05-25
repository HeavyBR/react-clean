export enum HttpStatusCode {
  unauthorized = 401,
  badRequest = 400,
  ok = 200,
  serverError = 500,
  notFound = 404
}

export type HttpResponse = {
  statusCode: HttpStatusCode
  body?: any
}
