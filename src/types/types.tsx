import { NextRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { ReactNode } from 'react';
import { FieldErrorsImpl, FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { SetterOrUpdater } from 'recoil';

export type Tatoe = {
  tId?: string | string[];
  userId?: string;
  title?: string;
  shortParaphrase?: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
  imageUrl?: string;
  imageId?: string;
  formData?: FormData;
};

export type AllUserTatoe = {
  tId?: string;
  userId?: string;
  title?: string;
  shortParaphrase?: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
  imageUrl?: string;
  imageId?: string;
  formData?: FormData;
  userName: string;
};

export type Edit = {
  handleMoveToEdit: () => void;
  createdAt: string;
  tatoe: Tatoe[];
  setTatoe: SetterOrUpdater<Tatoe[]>;
  router: NextRouter;
};

export type Result = {
  handleMoveToResult: () => void;
  createdAt: string;
  tatoe: Tatoe[] | ParsedUrlQuery[];
  setTatoe: SetterOrUpdater<Tatoe[] | ParsedUrlQuery[]>;
  router: NextRouter;
};

export type CardProps = {
  tatoe: Edit['tatoe'];
  handleMoveToResult: Edit['handleMoveToEdit'];
};

export type Layouts = {
  children: ReactNode;
};

export type WithoutPropsChildrenLayouts = {
  children?: ReactNode;
};

export type TatoeBtnProps = {
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
  accessToken: string | null;
} & Tatoe;

export type OnClick = {
  onClick: () => void;
};

export type SubmitImageProps = {
  onSubmit: (file: File) => void;
  userId?: string;
  tId?: string;
  query?: ParsedUrlQuery;
};

export type FormProps = {
  register: UseFormRegister<FieldValues>;
  errors?: FieldErrorsImpl<{
    [x: string]: any;
  }>;
  isValid?: boolean;
  setValue?: UseFormSetValue<FieldValues>;
};
