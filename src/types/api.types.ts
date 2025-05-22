export type ApiResponse<T> = {
  success: boolean;
  data: T | null; // Allow data to be null for cases like not found
  statusCode: number;
  error?: {
    message: string;
    code?: string; // Optional error code
  };
};
