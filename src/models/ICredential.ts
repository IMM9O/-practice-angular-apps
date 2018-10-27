export interface ICredential {
  username: string;
  password: string;
}


export interface ILoginResponseApi {
  token?: string;
  error?: string;
}
