export interface IRepository<BaseEntity> {
    getAll(): Promise<BaseEntity[]>;
}
