export interface CommandHandler<TRequest, TResponse> {
  execute: (query?: TRequest) => Promise<TResponse>
}