// Name all repositories 'Repo', otherwise it conflicts with TypeORM (Whut?!)
export interface IRepo<Type, BaseEntity> {
  getAll(): Promise<BaseEntity[]>;
  getById(id: Type): Promise<BaseEntity>;
  add(entity: BaseEntity);
  update(id: Type, entity: Partial<BaseEntity>);
}
