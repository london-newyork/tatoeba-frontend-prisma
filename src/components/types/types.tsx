import { NextRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { Dispatch, ReactNode, SetStateAction } from 'react';
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
  tatoe: Tatoe[];
} & Tatoe;
