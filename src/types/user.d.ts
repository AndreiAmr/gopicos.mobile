export type IUser = {
  status: string;
  data: {
    user: {
      id: string;
      name: string;
      email: string;
      lastname: string;
      nickname: string;
      createdAt: Date;
      deleted: boolean;
      deletedAt: Date | null;
      updatedAt: Date;
    };
  };
};
