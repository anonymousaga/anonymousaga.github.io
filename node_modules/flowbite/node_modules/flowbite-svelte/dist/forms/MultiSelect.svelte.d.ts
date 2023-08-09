import { SvelteComponentTyped } from "svelte";
import type { FormSizeType, SelectOptionType } from '../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        items?: SelectOptionType[] | undefined;
        value?: (string | number)[] | undefined;
        size?: FormSizeType | undefined;
        dropdownClass?: string | undefined;
    };
    events: {
        selected: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            item: SelectOptionType;
            clear: () => void;
        };
    };
};
export type MultiSelectProps = typeof __propDef.props;
export type MultiSelectEvents = typeof __propDef.events;
export type MultiSelectSlots = typeof __propDef.slots;
/**
 * ## Example
 * ```
 * <script>
 *   import MultiSelect from '../../../lib/forms/MultiSelect.svelte';
 *
 *   let selected = [];
 *   let countries = [
 *     {value:"us", name: "United States"},
 *     {value:"ca", name: "Canada"},
 *     {value:"fr", name: "France"},
 *     {value:"jp", name: "Japan"},
 *     {value:"en", name: "England"},
 *   ]
 * </script>
 *
 * <MultiSelect items={countries} bind:value={selected} />
 * ```
 */
export default class MultiSelect extends SvelteComponentTyped<MultiSelectProps, MultiSelectEvents, MultiSelectSlots> {
}
export {};
//# sourceMappingURL=MultiSelect.svelte.d.ts.map