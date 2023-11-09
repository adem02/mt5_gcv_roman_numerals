import {IocContainer} from "tsoa";
import {container, InjectionToken} from "tsyringe";

export const iocContainer: IocContainer = {
    get: <T>(controller: {prototype: T}) => {
        return container.resolve<T>(controller as InjectionToken<T>);
    }
}