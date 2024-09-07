export type TReduxResponse<T> = {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
};
