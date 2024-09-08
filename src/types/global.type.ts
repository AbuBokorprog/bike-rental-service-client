export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

type TMeta = {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}

export type TReduxResponse<T> = {
  data?: {
    data?: T,
    meta?: TMeta
  }
  error?: TError;
  success: boolean;
  message: string;
};

export type TQueryParams = {
  name: string;
  value: boolean | React.Key;
};