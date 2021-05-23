export interface IRepository<BaseEntity> {
    getAll(): Promise<BaseEntity[]>;
    getById(id: number): BaseEntity;
    add(entity: BaseEntity);
}
