import { NavigationAction, NavigationState, Router } from '@react-navigation/routers';
import { NavigationEventEmitter } from './useEventEmitter';
import { NavigationProp, PrivateValueStore } from './types';
declare type Options<State extends NavigationState, Action extends NavigationAction> = {
    onAction: (action: NavigationAction, visitedNavigators?: Set<string>) => boolean;
    getState: () => State;
    emitter: NavigationEventEmitter;
    router: Router<State, Action>;
};
/**
 * Navigation object with helper methods to be used by a navigator.
 * This object includes methods for common actions as well as methods the parent screen's navigation object.
 */
export default function useNavigationHelpers<State extends NavigationState, Action extends NavigationAction, EventMap extends Record<string, any>>({ onAction, getState, emitter, router }: Options<State, Action>): {
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
    dangerouslyGetParent<T = NavigationProp<any, string, any, {}, {}> | undefined>(): T;
    dangerouslyGetState(): any;
} & import("./types").EventConsumer<any> & PrivateValueStore<any, string, any>;
export {};
