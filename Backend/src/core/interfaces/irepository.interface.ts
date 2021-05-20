export interface IRepository<BaseEntity> {
    getAll(): Promise<BaseEntity[]>;
    add(entity: BaseEntity);
}
