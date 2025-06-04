import "reflect-metadata";

export class Container{
    private instances = new Map();

    resolve<T>(target: new (...args: any[]) => T): T{
        if(this.instances.has(target)){
            return this.instances.get(target);
        }

        const deps = Reflect.getMetadata('design:paramtypes', target) || [];
        const injections = deps.map((dep: any) => this.resolve(dep));
        const instance = new target(...injections);

        this.instances.set(target, instance);

        return instance; 
    }
}