export interface IRepository<BaseEntity> {
  getAll(): Promise<BaseEntity[]>;
  getById(id: number): Promise<BaseEntity>;
  add(entity: BaseEntity);
  update(id: number, entity: BaseEntity);
}
