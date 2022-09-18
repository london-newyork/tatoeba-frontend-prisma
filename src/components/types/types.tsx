import { NextRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { ReactNode } from 'react';
import { SetterOrUpdater } from 'recoil';

export type Tatoe = {
  tId?: string;
  userId?: string;
  title?: string;
  shortParaphrase?: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
  tImageUrl?: string;
  query_tId?: string | string[];
};

export type Edit = {
  handleMoveToEdit: (
    tId: string,
    title: string,
    shortParaphrase: string,
    description: string
  ) => void;
  createdAt: string;
  tatoe: Tatoe[];
  setTatoe: SetterOrUpdater<Tatoe[]>;
  router: NextRouter;
};

export type Result = {
  handleMoveToResult: (
    tId: string,
    title: string,
    shortParaphrase: string,
    description: string
  ) => void;
  createdAt: string;
  tatoe: Tatoe[] | ParsedUrlQuery[];
  setTatoe: SetterOrUpdater<Tatoe[] | ParsedUrlQuery[]>;
  router: NextRouter;
};

export type CardProps = {
  tatoe: Edit['tatoe'];
  // handleMoveToEdit: Edit["handleMoveToEdit"]
  handleMoveToResult: Edit['handleMoveToEdit'];
};

export type Layouts = {
  children: ReactNode;
};

export type WithoutPropsChildrenLayouts = {
  children?: ReactNode;
};

export type TatoeBtnProps = {
  onClick: () => void;
  tatoe?: Tatoe[];
} & Tatoe;

export type User = {
  userId: string | null;
  userName: string | undefined;
  email: string | undefined;
  password: string | undefined;
  createdAt: string | undefined;
  updatedAt: string | undefined;
};
export type TatoeBtnHooksProps = {
  tatoe: Tatoe[];
  router: NextRouter;
  user: User;
  setTatoe: SetterOrUpdater<Tatoe[] | ParsedUrlQuery[]>;
  persistAccessToken: string | null;
} & Tatoe;

export type OnClick = {
  onClick: () => void;
};
