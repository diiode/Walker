export interface IRepository<Type, BaseEntity> {
  getAll(): Promise<BaseEntity[]>;
  getById(id: Type): Promise<BaseEntity>;
  add(entity: BaseEntity);
  update(id: Type, entity: Partial<BaseEntity>);
}
