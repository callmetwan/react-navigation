import { DefaultRouterOptions, NavigationState, RouterFactory } from '@react-navigation/routers';
import { DefaultNavigatorOptions, PrivateValueStore } from './types';
/**
 * Hook for building navigators.
 *
 * @param createRouter Factory method which returns router object.
 * @param options Options object containing `children` and additional options for the router.
 * @returns An object containing `state`, `navigation`, `descriptors` objects.
 */
export default function useNavigationBuilder<State extends NavigationState, RouterOptions extends DefaultRouterOptions, ScreenOptions extends object, EventMap extends Record<string, any>>(createRouter: RouterFactory<State, any, RouterOptions>, options: DefaultNavigatorOptions<ScreenOptions> & RouterOptions): {
    state: State;
    navigation: {
        dispatch(action: any): void;
        navigate<RouteName extends string | number | symbol>(...args: [RouteName] | [RouteName, any]): void;
        navigate<RouteName_1 extends string | number | symbol>(route: {
            key: string;
            params?: any;
        } | {
            name: RouteName_1;
            key?: string | undefined;
            params: any;
        }): void;
        reset(state: any): void;
        goBack(): void;
        isFocused(): boolean;
        canGoBack(): boolean;
    } & PrivateValueStore<any, string | number | symbol, {}> & import("./types").EventEmitter<EventMap> & {
        setParams<RouteName_2 extends string | number | symbol>(params: any): void;
    } & {
        dispatch(action: any): void;
        navigate<RouteName_3 extends string | number | symbol>(...args: [RouteName_3] | [RouteName_3, any]): void;
        navigate<RouteName_4 extends string | number | symbol>(route: {
            key: string;
            params?: any;
        } | {
            name: RouteName_4;
            key?: string | undefined;
            params: any;
        }): void;
        reset(state: any): void;
        goBack(): void;
        isFocused(): boolean;
        canGoBack(): boolean;
    } & {
        setParams(params: any): void;
        setOptions(options: Partial<any>): void;
        dangerouslyGetParent<T = import("./types").NavigationProp<any, string, any, {}, {}> | undefined>(): T;
        dangerouslyGetState(): any;
    } & import("./types").EventConsumer<any> & PrivateValueStore<any, string, any>;
    descriptors: any;
};
