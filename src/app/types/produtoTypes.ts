import { StaticImport } from "next/dist/shared/lib/get-img-props";
export interface ProdutoProps {
  _id: string;
  title: string;
  image1: string | StaticImport;
  image2?: string | StaticImport;
  image3?: string | StaticImport;
  image4?: string | StaticImport;
  category: string;
  description: string;
  comments: [];
  likes: { _id: string }[];
  createdAt: Date;
  updatedAt: Date;
}
