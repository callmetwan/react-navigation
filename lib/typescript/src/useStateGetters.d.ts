import { NavigatorStateGetter } from './NavigationBuilderContext';
/**
 * Hook which lets child navigators add getters to be called for obtaining rehydrated state.
 */
export default function useStateGetters(): {
    getStateForRoute: (routeKey: string) => any;
    addStateGetter: (key: string, getter: NavigatorStateGetter) => () => void;
};
