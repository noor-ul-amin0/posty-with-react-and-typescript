import { SvgIconProps } from "@mui/material";

export type Owner = {
firstName: string;
id: string;
lastName: string;
picture: string;
title: string;
};
export type Post = {
  id: string;
  text: string;
  image: string;    
  likes: number;
  tags: Array<string>;
  publishDate: string;
  owner: Owner;
};
export type Item = Readonly<{
  id: number;
  title: string;
  icon: React.ReactElement<SvgIconProps>;
  link?: string;
}>;
export type SideDrawerProp = {
  sideItems: Item[];
  isDrawerOpen: boolean;
  toggleDrawer: Function;
};
export type Quote = {
  text: string;
  author: string;
};