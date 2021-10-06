export interface QueryHandler<TRequest, TResponse> {
  handle: (query?: TRequest) => Promise<TResponse>
}