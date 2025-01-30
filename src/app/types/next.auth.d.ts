import { DefaultSelection } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSelection["user"];
  }
}
